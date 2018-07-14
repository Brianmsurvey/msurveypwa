import faker from "faker";

// !!! Using faker to generate test user data
// Not to be included in production

const GetAudienceData = () => {
  /* Get all user data */
  let audience_data = [];

  for (let i = 0; i < 1000; i++) {
    audience_data.push({
      id: i + 1,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      contact: faker.internet.email(),
      company_name: faker.company.companyName(),
      city: faker.address.city(),
      date_registered: faker.date.past().toLocaleDateString("en-US"),
      last_seen: faker.date.past().toLocaleDateString("en-US"),
      incentive_received: faker.random.number(),
      surveys_received: faker.random.number(),
      surveys_completed: faker.random.number(),
      engagement_rate: Math.ceil(
        (faker.random.number() / faker.random.number()) * 100
      )
    });
  }

  // Log generated data to the console
  console.log(audience_data);

  // Return generated user data
  return audience_data;
};

export default GetAudienceData;
