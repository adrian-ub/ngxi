import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGoForward10SecIcon],svg[hugeicons-go-forward-10-sec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 5l1.104-1.545c.41-.576.617-.864.487-1.13c-.13-.268-.46-.283-1.12-.314Q12.237 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a9.99 9.99 0 0 0-4-8"></svg:path><svg:path d="M7.992 11.004C8.52 10.584 9 9.89 9.3 10.02c.3.128.204.552.204 1.212v4.776m6.498-3.408c0-1.38.066-1.752-.198-2.196s-.924-.406-1.584-.406s-1.14-.038-1.458.322c-.39.42-.222 1.2-.27 2.28c.108 1.44-.186 2.58.264 3.06c.324.396.9.336 1.584.348c.68-.008 1.092.024 1.428-.36c.372-.336.192-1.668.234-3.048"></svg:path></svg:g>`,
})
export class HugeiconsGoForward10SecIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
