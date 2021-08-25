import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';

export enum GovernanceChatAccountType {
  Uninitialized = 0,
  ChatMessage = 1,
}

export interface GovernanceChatAccount {
  accountType: GovernanceChatAccountType;
}

export type GovernanceChatAccountClass = typeof ChatMessage;

export enum MessageBodyType {
  Text = 0,
  Reaction = 1,
}

export class MessageBody {
  type: MessageBodyType;
  value: string;

  constructor(args: { type: MessageBodyType; value: string }) {
    this.type = args.type;
    this.value = args.value;
  }
}

export class ChatMessage {
  accountType = GovernanceChatAccountType.ChatMessage;

  proposal: PublicKey;
  author: PublicKey;
  postedAt: BN;
  replyTo: PublicKey | undefined;
  body: MessageBody;

  constructor(args: {
    proposal: PublicKey;
    author: PublicKey;
    postedAt: BN;
    replyTo: PublicKey | undefined;
    body: MessageBody;
  }) {
    this.proposal = args.proposal;
    this.author = args.author;
    this.postedAt = args.postedAt;
    this.replyTo = args.replyTo;
    this.body = args.body;
  }
}
