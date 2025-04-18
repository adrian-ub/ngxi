import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneHighlightIcon],svg[ic-twotone-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20h2v-3.83l3-3V11H8v2.17l3 3z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m6 14l3 3v5h6v-5l3-3V9H6zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3zm3-9h2v3h-2zM4.916 4.464l2.12 2.122L5.62 8L3.5 5.877zM18.372 8l-1.414-1.414l2.12-2.12l1.415 1.413z"></svg:path>`,
})
export class IcTwotoneHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
