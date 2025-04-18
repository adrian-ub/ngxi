import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFlagAltIcon],svg[gg-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.439 7l2.4-3H7v6h7.839zM19 12H7v10H5V2h14l-4 5z" clip-rule="evenodd"></svg:path>`,
})
export class GgFlagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
