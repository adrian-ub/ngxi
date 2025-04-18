import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderHorizontalIcon],svg[mdi-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21h2v-2h-2m-4 2h2v-2h-2m-4-2h2v-2h-2m8-6h2V7h-2m0-2h2V3h-2M3 13h18v-2H3m8 10h2v-2h-2m8-2h2v-2h-2M13 3h-2v2h2m0 2h-2v2h2m4-6h-2v2h2M9 3H7v2h2M5 3H3v2h2m2 16h2v-2H7m-4-2h2v-2H3m2-8H3v2h2M3 21h2v-2H3z"></svg:path>`,
})
export class MdiBorderHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
