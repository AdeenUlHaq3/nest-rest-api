import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    // @UseInterceptors(ClassSerializerInterceptor)
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Post() 
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    }
}
