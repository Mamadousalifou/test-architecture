import {scrypt,randomBytes} from 'crypto';
import {promisify} from 'util';

const scryptAsync = promisify(scrypt);

/**
 * 
 */

export class PasswordHash{


      static async toHash(password){
 

           const salt = randomBytes(8).toString('hex');
           const buffer = await scryptAsync(password,salt,64);
           return `${buffer.toString('hex')}.${salt}`;

      } 


      static async compare(storedPassword, suppliedPassword){

           const [hasedPassword,salt] = storedPassword.split('.');
           const buffer = await scryptAsync(suppliedPassword,salt,64);
           return buffer.toString('hex') === hasedPassword;
      }
}