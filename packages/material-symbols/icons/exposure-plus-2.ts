import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExposurePlus2Icon],svg[material-symbols-exposure-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-3H3v-2h3V9h2v3h3v2H8v3zm6.1 2v-2.1l5-5.1q.825-.875 1.163-1.463T18.6 9q0-.725-.562-1.312T16.35 7.1q-.9 0-1.487.5t-.813 1.3l-2-.8q.35-1.125 1.45-2.113T16.4 5q2.075 0 3.238 1.188T20.8 9q0 1.125-.525 2.05T18.65 13.1L15 16.9l.05.1H21v2z"></svg:path>`,
})
export class MaterialSymbolsExposurePlus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
