# MongoDB Learning Repository

Welcome to the **MongoDB Learning Repository**! This repository is a collection of tasks and experiments performed while learning MongoDB. It includes various operations and concepts, from basic CRUD operations to advanced topics like indexing and aggregation.

---

## Table of Contents

1. [Overview](#overview)
2. [Tasks Performed](#tasks-performed)
3. [Setup Instructions](#setup-instructions)
4. [How to Run](#how-to-run)
5. [Learnings](#learnings)
6. [Future Enhancements](#future-enhancements)
7. [Contributing](#contributing)
8. [License](#license)

---

## Overview

This repository demonstrates how to work with MongoDB effectively. The primary goal is to understand MongoDB's core features and perform operations such as:

- Setting up a MongoDB database.
- Performing CRUD operations.
- Creating and using indexes for optimization.
- Writing aggregation pipelines for data analysis.
- Exploring advanced MongoDB features like transactions and schema design.

---

## Tasks Performed

1. **Database Setup**
   - Installed MongoDB and connected to a local instance.
   - Created a sample database and collections.

2. **CRUD Operations**
   - Inserted, updated, and deleted documents in collections.
   - Retrieved documents using various query operators (e.g., `$gt`, `$lt`, `$regex`).

3. **Indexing**
   - Created single-field and compound indexes.
   - Analyzed query performance using `explain()`.

4. **Aggregation**
   - Built aggregation pipelines for filtering, grouping, and projecting data.
   - Used operators like `$match`, `$group`, `$project`, and `$sort`.

5. **Transactions**
   - Implemented multi-document ACID transactions.

6. **Schema Design**
   - Designed efficient schemas for collections based on use cases.

---

## Setup Instructions

1. Install [MongoDB](https://www.mongodb.com/try/download/community) on your local machine.
2. Clone this repository:
   ```bash
   git clone https://github.com/your-username/mongodb-learning.git
   ```
3. Navigate to the repository:
   ```bash
   cd mongodb-learning
   ```
4. Install dependencies (if any Node.js scripts are used):
   ```bash
   npm install
   ```
5. Start the MongoDB server:
   ```bash
   mongod
   ```

---

## How to Run

1. Ensure the MongoDB server is running on your system.
2. Open any script in the `scripts` folder and run it using Node.js. For example:
   ```bash
   node scripts/crud-operations.js
   ```
3. Follow the instructions in the script for specific operations.

---

## Learnings

- **CRUD Operations:** Learned how to insert, update, delete, and query documents.
- **Indexing:** Improved query performance by creating and using indexes.
- **Aggregation Framework:** Mastered data analysis using MongoDB's powerful aggregation framework.
- **Transactions:** Gained hands-on experience with MongoDB transactions for multi-document operations.
- **Schema Design:** Understood the importance of designing flexible and efficient schemas.

---

## Future Enhancements

- Explore sharding and replication in MongoDB.
- Integrate MongoDB with a backend application (Node.js/Express).
- Experiment with MongoDB Atlas for cloud-based database management.

---

## Contributing

Contributions are welcome! If you'd like to improve this repository or add more examples, feel free to fork the repo and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy learning MongoDB! :rocket:
