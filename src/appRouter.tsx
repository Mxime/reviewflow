import { Application } from 'probot';
import cookieParser from 'cookie-parser';
import { AppContext } from './context/AppContext';
import repository from './app/repository';
import auth from './app/auth';
import home from './app/home';
import orgSettings from './app/org-settings';
import userSettings from './app/user-settings';

export default async function appRouter(
  app: Application,
  { mongoStores }: AppContext,
): Promise<void> {
  const router = app.route('/app');
  const api = await app.auth();

  router.use(cookieParser());

  auth(router);
  repository(router, api);
  home(router, api, mongoStores);
  orgSettings(router, api, mongoStores);
  userSettings(router, api, mongoStores);
}
