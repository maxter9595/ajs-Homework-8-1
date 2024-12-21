// Класс Character
class Character {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

// Класс Team
class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('This character is already in the team');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => this.add(character));
    }

    toArray() {
        return Array.from(this.members);
    }
}

// Экспортируем классы, чтобы их можно было тестировать
module.exports = { Character, Team };
