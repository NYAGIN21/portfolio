import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'telegram',
    link: 'NYAGIN',
    href: 'https://t.me/NYAGIN',
  },
  {
    social: 'vk',
    link: 'Nyagin Ilya',
    href: 'https://vk.com/id525012721',
  },
  {
    social: 'email',
    link: 'nyagin21.com',
    href: 'mailto:nyagin21@gmail.com',
  },
  {
    social: 'github',
    link: 'NYAGIN',
    href: 'https://github.com/NYAGIN21',
  },
  {
    social: 'phone',
    link: '+7 (927) 846-18-56',
    href: 'tel:+79278461856',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
