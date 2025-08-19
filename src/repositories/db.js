// Repositório simples em memória para Users, Foods e Meals.
const { v4: uuidv4 } = require('uuid');

const db = {
  users: new Map(), // id -> user
  foods: new Map(),
  meals: new Map()
};

// Helpers
function generateId() {
  return uuidv4();
}

// Users
const UserRepo = {
  create: async (data) => {
    const id = generateId();
  const now = new Date().toISOString();
  const user = { ...data, role: data.role || 'user', id, createdAt: now, updatedAt: now };
    db.users.set(id, user);
    return user;
  },
  count: async () => db.users.size,
  findByEmail: async (email) => {
    for (const user of db.users.values()) {
      if (user.email === email) return user;
    }
    return null;
  },
  findById: async (id) => db.users.get(id) || null,
  update: async (id, data) => {
    const existing = db.users.get(id);
    if (!existing) return null;
  const now = new Date().toISOString();
  const updated = { ...existing, ...data, id, updatedAt: now };
    db.users.set(id, updated);
    return updated;
  }
};

// Foods
const FoodRepo = {
  create: async (data) => {
    const id = generateId();
  const now = new Date().toISOString();
  const food = { ...data, id, createdAt: now, updatedAt: now };
    db.foods.set(id, food);
    return food;
  },
  findAll: async () => Array.from(db.foods.values()),
  findById: async (id) => db.foods.get(id) || null,
  update: async (id, data) => {
    const existing = db.foods.get(id);
    if (!existing) return null;
  const now = new Date().toISOString();
  const updated = { ...existing, ...data, id, updatedAt: now };
    db.foods.set(id, updated);
    return updated;
  },
  delete: async (id) => db.foods.delete(id)
};

// Meals
const MealRepo = {
  create: async (data) => {
    const id = generateId();
  const now = new Date().toISOString();
  const meal = { ...data, id, createdAt: now, updatedAt: now };
    db.meals.set(id, meal);
    return meal;
  },
  findByUserId: async (userId) => Array.from(db.meals.values()).filter(m => m.user === userId),
  findById: async (id) => db.meals.get(id) || null,
  update: async (id, data) => {
    const existing = db.meals.get(id);
    if (!existing) return null;
  const now = new Date().toISOString();
  const updated = { ...existing, ...data, id, updatedAt: now };
    db.meals.set(id, updated);
    return updated;
  },
  delete: async (id) => db.meals.delete(id)
};

function reset() {
  db.users.clear();
  db.foods.clear();
  db.meals.clear();
}

module.exports = { UserRepo, FoodRepo, MealRepo, reset };

