import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRoundedSymbolForShouIcon],svg[openmoji-rounded-symbol-for-shou-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#ea5a47"></svg:circle><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28" stroke-miterlimit="10"></svg:circle><svg:path stroke-linecap="round" d="M23 36h26m-25-5h24m-12 0v5M21.5 26h29A18 18 0 0 1 54 36h5a23 23 0 0 0-2.5-10m-35 0A18 18 0 0 0 18 36h-5a23 23 0 0 1 2.5-10M14 42h44a23 23 0 0 1-19 17M14 42a23 23 0 0 0 19 17"></svg:path><svg:path stroke-linecap="round" d="M22 47h28a23 23 0 0 1-11 6.8M22 47a23 23 0 0 0 11 6.8M36 42v5M18.5 21a23 23 0 0 1 35 0"></svg:path><svg:path stroke-linecap="round" d="M26 21a18 18 0 0 1 20 0m-10-8v8"></svg:path></svg:g>`,
})
export class OpenmojiRoundedSymbolForShouIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
