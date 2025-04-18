import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGoForward5SecIcon],svg[hugeicons-go-forward-5-sec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 5l1.104-1.545c.41-.576.617-.864.487-1.13c-.13-.268-.46-.283-1.12-.314Q12.237 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a9.99 9.99 0 0 0-4-8"></svg:path><svg:path d="M14 10h-3.09a.5.5 0 0 0-.49.402L10 12.5c.694-.165 1.355-.357 2.071-.357a1.929 1.929 0 1 1 0 3.857c-.827 0-1.808.017-2.04-1"></svg:path></svg:g>`,
})
export class HugeiconsGoForward5SecIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
