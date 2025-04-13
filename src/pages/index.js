import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { PrimeReactProvider } from 'primereact/api';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';
import { Divider } from 'primereact/divider';
import styles from './index.module.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <p className={styles.heroTag}>Introducing</p>
        <img src="/img/scout.png" alt="Scout Logo" className={styles.logo} />
        <h1 className={styles.heroTitle}>Meet Scout</h1>
        <p className={styles.heroDescription}>
          Your intelligent business search tool. Scout tracks, analyzes, and alerts you to new business opportunities across New York state. 
          Be the first to discover emerging companies and market trends with our powerful search and alert platform.
        </p>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: 'pi pi-search',
      title: 'Advanced Search',
      description: 'Search by company name, industry, location, size, and more'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Custom Reports',
      description: 'Generate detailed reports with company insights and market analysis'
    },
    {
      icon: 'pi pi-bell',
      title: 'Alert System',
      description: 'Get notified about newly incorporated businesses matching your criteria'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h6 className={styles.sectionSubtitle}>Features</h6>
          <h2 className={styles.sectionTitle}>Powerful Business Intelligence</h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <Card key={index} className={styles.featureCard}>
              <i className={`${feature.icon} ${styles.featureIcon}`}></i>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchSection() {
  const searchCriteria = [
    { icon: 'pi pi-search', text: 'Search by business name or keywords' },
    { icon: 'pi pi-tags', text: 'Filter by business tags and categories' },
    { icon: 'pi pi-map-marker', text: 'Target specific ZIP codes or counties' },
    { icon: 'pi pi-calendar', text: 'Filter by filing date range' },
    { icon: 'pi pi-check-circle', text: 'Focus on active business entities' },
    { icon: 'pi pi-phone', text: 'Filter by contact information availability' }
  ];

  return (
    <section className={styles.searchSection}>
      <div className={styles.container}>
        <div className={styles.searchContent}>
          <div className={styles.searchInfo}>
            <div className={styles.sectionHeader}>
              <h6 className={styles.sectionSubtitle}>Advanced Search</h6>
              <h2 className={styles.sectionTitle}>Find the Right Business Opportunities</h2>
            </div>
            <p>Create customized reports by filtering businesses using our comprehensive search criteria:</p>
            <ul className={styles.searchCriteria}>
              {searchCriteria.map((item, index) => (
                <li key={index}>
                  <i className={`${item.icon} ${styles.criteriaIcon}`}></i>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <Card className={styles.searchForm}>
            <div className={styles.formContent}>
              <h3>Create a New Report</h3>
              <div className={styles.formGroup}>
                <label>Report Name</label>
                <InputText value="attorneys" placeholder="Enter your report name" />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Search Term</label>
                  <InputText placeholder="Enter your search term" />
                </div>
                <div className={styles.formGroup}>
                  <label>Tags</label>
                  <AutoComplete placeholder="Search and select tags" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Zip Codes</label>
                  <AutoComplete placeholder="Search and select zip codes" />
                </div>
                <div className={styles.orDivider}>OR</div>
                <div className={styles.formGroup}>
                  <label>County</label>
                  <AutoComplete placeholder="Search and select county" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Filed After</label>
                  <Calendar placeholder="Select date" />
                </div>
                <div className={styles.formGroup}>
                  <label>Filed Before</label>
                  <Calendar placeholder="Select date" />
                </div>
              </div>
              <div className={styles.switches}>
                <div className={styles.switchGroup}>
                  <label>Phone Required</label>
                  <InputSwitch checked />
                </div>
                <div className={styles.switchGroup}>
                  <label>Website Required</label>
                  <InputSwitch />
                </div>
                <div className={styles.switchGroup}>
                  <label>Active Entities Only</label>
                  <InputSwitch checked />
                </div>
              </div>
              <Button label="Submit" icon="pi pi-check" className={styles.submitButton} />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <PrimeReactProvider>
      <Layout
        title={siteConfig.title}
        description="Your intelligent business search tool for New York state">
        <HeroSection />
        <main>
          <FeaturesSection />
          <SearchSection />
        </main>
      </Layout>
    </PrimeReactProvider>
  );
}
