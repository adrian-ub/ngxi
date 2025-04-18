import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRoundedSymbolForShuangxiIcon],svg[openmoji-rounded-symbol-for-shuangxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#ea5a47"></svg:circle><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" d="M39 36h19.8a23 23 0 0 0-1-6H39zm-6 0H13.2a23 23 0 0 1 1-6H33zM16.5 24h39M22 18h28m-19-4.5V24m10-10.5V24M14 42h44m-30-6v12m16-12v12m-11 0H16.5A23 23 0 0 0 33 58.8zm6 0h16.5A23 23 0 0 1 39 58.8z"></svg:path></svg:g>`,
})
export class OpenmojiRoundedSymbolForShuangxiIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
