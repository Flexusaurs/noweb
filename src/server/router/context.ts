import * as trpc from '@trpc/server';
import type * as trpcNext from '@trpc/server/adapters/next';
import { getServerSession } from 'next-auth';

import { AuthOptions } from '';
import {prisma} from '../db/client';

export const createContext = async (
    opts?: trpcNext.CreateNextContextOptions
) => {
    const req = opts?.req;
    const res = opts?.res;

    const session = 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    req && res && (await getServerSession(req,res,AuthOptions));

    return{
        req,
        res,
        session,
        prisma
    };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();