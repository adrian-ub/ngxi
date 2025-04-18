import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSegmentIcon],svg[mdi-segment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3V6h18M9 13h12v-2H9m0 7h12v-2H9"></svg:path>`,
})
export class MdiSegmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
