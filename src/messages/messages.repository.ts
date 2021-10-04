import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {

  findOne = async (id: string) => {
    const contents = await readFile('./messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  };

  findAll = async () => {
    const contents = await readFile('./messages.json', 'utf8');
    return JSON.parse(contents);
  };

  create = async (content: string) => {
    const contents = await readFile('./messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  };
}
