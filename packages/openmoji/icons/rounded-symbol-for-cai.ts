import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRoundedSymbolForCaiIcon],svg[openmoji-rounded-symbol-for-cai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#ea5a47"></svg:circle><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:path stroke-linecap="round" d="M33 26h6v20h-6zm-5-5h5v-8h6v8h5M28 51h5v8h6v-8h5m0-15h15m-31 0H13"></svg:path><svg:path stroke-linecap="round" d="M28 14.5v43A23 23 0 0 1 13.5 41H23v7.5a18 18 0 0 1-2.5-3"></svg:path><svg:path stroke-linecap="round" d="M28 14.5A23 23 0 0 0 13.5 31H23v-7.5a18 18 0 0 0-2.5 3m23.5-12v43A23 23 0 0 0 58.5 41H49v7.5a18 18 0 0 0 2.5-3"></svg:path><svg:path stroke-linecap="round" d="M44 14.5A23 23 0 0 1 58.5 31H49v-7.5a18 18 0 0 1 2.5 3"></svg:path></svg:g>`,
})
export class OpenmojiRoundedSymbolForCaiIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
