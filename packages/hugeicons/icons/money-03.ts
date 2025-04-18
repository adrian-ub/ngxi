import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoney03Icon],svg[hugeicons-money-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m4.5-.858a14 14 0 0 0-1-.107m-12 1.93q-.512-.036-1-.107"></svg:path><svg:path d="M12 19.5c-1.332.622-3.083 1-5 1c-1.066 0-2.08-.117-3-.327c-1.5-.344-2-1.247-2-2.787V6.614c0-.985 1.04-1.661 2-1.441c.92.21 1.934.327 3 .327c1.917 0 3.668-.378 5-1s3.083-1 5-1c1.066 0 2.08.117 3 .327c1.582.363 2 1.293 2 2.787v10.772c0 .985-1.04 1.661-2 1.441c-.92-.21-1.934-.327-3-.327c-1.917 0-3.668.378-5 1"></svg:path></svg:g>`,
})
export class HugeiconsMoney03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
