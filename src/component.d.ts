import { ScriptProps } from 'next/script';
import { FC } from 'react';

export interface VWOScriptProps extends Partial<ScriptProps> {
    accountId: string;
    type?: 'ASYNC' | 'SYNC';
    settingsTimeout?: number;
    hideElement?: string;
    hideElementStyle?: string;
    scriptAttributes?: Record<string, any>;
}

export declare const VWOScript: FC<VWOScriptProps>;