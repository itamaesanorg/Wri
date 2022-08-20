import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

import cn from 'lib/classNames'

export default function Container(props: any) {
  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    title: 'wri',
    description:
      '💎 Wri, the best way to admire and show your components or projects like never before to clients, a standard diamond in the future of the industry, it is a showcase component or project site generator, install & play.',
    image:
      'https://user-images.githubusercontent.com/5947268/185643867-81854585-1f24-470e-9836-2a8b9c62c8dd.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <div
        className={cn(
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none'
        )}
      >
        <Head>
          <meta name='robots' content='follow, index' />
          <meta
            property='og:url'
            content={`https://wri.sushijs.org/${router.asPath}`}
          />
          <link
            rel='canonical'
            href={`https://wri.sushijs.org/${router.asPath}`}
          />
          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='wri' />
          <meta property='og:description' content={meta.description} />
          <meta property='og:title' content={meta.title} />
          <meta property='og:image' content={meta.image} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@itamaesanorg' />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta name='twitter:image' content={meta.image} />
          {meta.date && (
            <meta property='article:published_time' content={meta.date} />
          )}
        </Head>

        <main
          className={cn(
            'px-4 mt-20',
            'max-w-2xl',
            'mx-auto my-auto',
            'flex flex-col justify-center gap-12',
            'divide-y divide-gray-300 dark:divide-gray-700',
            'rounded-lg'
          )}
        >
          <div className='flex flex-col gap-2'>{children}</div>
        </main>
      </div>
    </>
  )
}
