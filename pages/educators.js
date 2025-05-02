import { useState } from 'react';
import Layout from '../components/Layout';
import { Disclosure } from '@headlessui/react';

const modules = [
  {
    title: 'Foundations of Gender & Sexuality',
    content: (
      <>
        <p className="mb-2">
          Cover basic definitions (sex vs. gender vs. orientation), unpack common misconceptions, and link to short explainer videos.
        </p>
        
      </>
    )
  },
  {
    title: 'Building an Inclusive Classroom',
    content: (
      <>
        <p className="mb-2">
          Practical tips for syllabus wording, pronoun badges, and inclusive examples in math/reading assignments.
        </p>
        
      </>
    )
  },
  {
    title: 'Coming-Out & Disclosure',
    content: (
      <>
        <p className="mb-2">
          How to support a student who is coming out at school: private meeting guidelines, confidentiality reminders, and follow-up plans.
        </p>
       
      </>
    )
  },
  {
    title: 'Family Engagement',
    content: (
      <>
        <p className="mb-2">
          Templates and conversation starters for educators to share with parents and guardians.
        </p>
        
      </>
    )
  },
  {
    title: 'Self-Care for Educators',
    content: (
      <>
        <p className="mb-2">
          Tips on preventing burnout, finding peer support, and setting healthy boundaries.
        </p>
        
      </>
    )
  }
];

export default function Educators() {
  const [formState, setFormState] = useState({ name: '', school: '', topic: '', email: '' });

  return (
    <Layout title="Resource for Educators">
      <section className="text-center py-12 bg-purple-50">
        <h1 className="text-4xl font-bold mb-4">Supporting LGBTQ+ Students</h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          Practical guides, lesson plans, and ready-to-use templates to make your classroom a safe space.
        </p>
      </section>

      <section className="max-w-3xl mx-auto p-4">
        {modules.map((mod, i) => (
          <Disclosure key={i} as="div" className="mb-4 border rounded">
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full px-4 py-3 text-left bg-purple-100 hover:bg-purple-200 flex justify-between">
                  <span className="font-medium">{mod.title}</span>
                  <span>{open ? '−' : '+'}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 bg-white">{mod.content}</Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </section>

      <section className="text-center py-8 bg-gray-50">
        <p>
          Further reading:{' '}
          <a href="https://www.glsen.org" className="text-purple-600 hover:underline">
            GLSEN
          </a>,{' '}
          <a href="https://pflag.org" className="text-purple-600 hover:underline">
            PFLAG
          </a>
        </p>
      </section>
    </Layout>
  );
}
