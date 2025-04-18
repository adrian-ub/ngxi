import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderInsideIcon],svg[mdi-border-inside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h2v-2h-2m0 6h2v-2h-2M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8m2 10h2v-2h-2m4-14h2V3h-2m0 6h2V7h-2m-2-4h-2v2h2M5 3H3v2h2m4-2H7v2h2M3 17h2v-2H3m2-8H3v2h2m2 12h2v-2H7m-4 2h2v-2H3z"></svg:path>`,
})
export class MdiBorderInsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
