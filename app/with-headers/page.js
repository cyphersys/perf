import { headers } from 'next/headers';

export default function WithHeaders () {
  const headerList = headers();
  const host = headerList.get('host')

  return <main>app/{host}</main>
}
