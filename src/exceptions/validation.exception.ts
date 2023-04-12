import { HttpException, HttpStatus } from "@nestjs/common";

export class ValidationException extends HttpException {

    messages: string [];

    constructor(responce: string[]) {
        super(responce, HttpStatus.BAD_REQUEST);
        this.messages = responce;
    }

}