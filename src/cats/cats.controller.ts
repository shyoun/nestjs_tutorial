import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateCatDto } from './create-cat.dto'

@Controller('cats')
export class CatsController {
	@Post()
	// @HttpCode(204) // httpcode 204로 return
	// @Header('Cache-Control', 'none') // set a headers
	create(@Body() createCatDto: CreateCatDto): string {
		console.log(createCatDto)
		return 'This action adds a new cat'
	}

	// Nest provides access to the request object of the underlying platform (Express by default)
	// Get으로 baseUrl/cats 해당 url 호출하면 여기가 실행
	@Get()
	// findAll(@Req() request: Request): string {
	findAll(): string {
		return 'This action returns all cats'
	}

	@Get(':id')
	findOne(@Param() params): string {
		console.log(params.id)
		return `This action returns a #${params.id} cat`
	}

	// use whildcards
	// @Get('ab*cd')
	// findAll() {
	// 	return 'This route uses a wildcard'
	// }
}

// sub domain host parameters
// @Controller({ host: ':account.example.com' })
// export class AccountController {
//   @Get()
//   getInfo(@HostParam('account') account: string) {
//     return account;
//   }
// }
