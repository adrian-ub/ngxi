import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsFlagAltIcon],svg[bxs-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.303 6l-3-2H6V2H4v20h2v-8h4.697l3 2H20V6z"></svg:path>`,
})
export class BxsFlagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
