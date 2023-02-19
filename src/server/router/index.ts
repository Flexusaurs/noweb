import superjson from 'superjson';
//TODO: routers
import { createRouter } from './context';


export const appRouter = createRouter()
.transformer(superjson)
.merge('post.', //postrouter)
.merge('comment.'//commentrouter)

/*

just init all routers by merge
*/


export type AppRouter = typeof appRouter;