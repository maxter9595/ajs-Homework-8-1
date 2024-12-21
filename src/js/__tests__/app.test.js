const { Character, Team } = require('../app');

describe('Team class', () => {
    let team;
    let character1;
    let character2;

    beforeEach(() => {
        team = new Team(); // Создаем новую команду для каждого теста
        character1 = new Character('John', 1); // Создаем персонажей
        character2 = new Character('Jane', 2);
    });

    test('should add character to the team', () => {
        team.add(character1); // Добавляем персонажа
        expect(team.toArray()).toContain(character1); // Проверяем, что персонаж в команде
    });

    test('should throw error if adding the same character twice', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('This character is already in the team');
    });

    test('should add multiple characters', () => {
        team.addAll(character1, character2); // Добавляем нескольких персонажей
        expect(team.toArray()).toContain(character1);
        expect(team.toArray()).toContain(character2);
    });

    test('should convert set to array', () => {
        team.addAll(character1, character2);
        expect(team.toArray()).toHaveLength(2); // Проверяем, что в массиве два персонажа
    });
});
