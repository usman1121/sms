import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book a Live Demo | Contact Us',
    description: 'Schedule an executive walkthrough of YeneSchool OS. Built for Ethiopian primary and secondary institutions by HUMAN Tech PLC in Addis Ababa.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
