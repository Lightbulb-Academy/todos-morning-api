import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

// export function Public() {
//   return SetMetadata(IS_PUBLIC_KEY, true);
// }

// export const Public = () => {
//   return SetMetadata(IS_PUBLIC_KEY, true);
// };
