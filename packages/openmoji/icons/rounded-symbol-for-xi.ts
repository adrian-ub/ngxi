import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRoundedSymbolForXiIcon],svg[openmoji-rounded-symbol-for-xi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#ea5a47"></svg:circle><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:path stroke-linecap="round" d="M33 33h6v6h-6zm0 20h6v6h-6zm0-40h6v6h-6zm3 6v14m0 6v14m-8-29h16m-16 4h16M28 44h16m-16 4h16M28 14.5V33h-9.8a18 18 0 0 1 5.2-10v5.6M28 57.5V39h-9.8a18 18 0 0 0 5.2 10v-5.6M44 14.5V33h9.8a18 18 0 0 0-5.2-10v5.6M44 57.5V39h9.8a18 18 0 0 1-5.2 10v-5.6"></svg:path><svg:path stroke-linecap="round" d="M28 14.5a23 23 0 0 0 0 43m16-43a23 23 0 0 1 0 43M24 33v6m24-6v6"></svg:path></svg:g>`,
})
export class OpenmojiRoundedSymbolForXiIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
