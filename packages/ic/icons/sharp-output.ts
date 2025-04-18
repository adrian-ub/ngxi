import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpOutputIcon],svg[ic-sharp-output-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 17l5-5l-5-5l-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"></svg:path><svg:path fill="currentColor" d="M19 19H5V5h14v2h2V3H3v18h18v-4h-2z"></svg:path>`,
})
export class IcSharpOutputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
