import { Config as ConfigType } from './types';
import defaultConfig from './defaultConfig';
import ornikar from './ornikar';
import christophehurpeau from './christophehurpeau';
import reviewflow from './reviewflow';

export type Config<
  GroupNames extends string = any,
  TeamNames extends string = any
> = ConfigType<GroupNames, TeamNames>;

export const accountConfigs: { [owner: string]: Config } = {
  ornikar,
  christophehurpeau,
  reviewflow,
};

export { defaultConfig };

// flat requires node 11
// export const getMembers = <GroupNames extends string = any>(
//   groups: Record<GroupNames, Group>,
// ): string[] => {
//   return Object.values(groups).flat(1);
// };
