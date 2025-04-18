import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeEqualIcon],svg[mdi-volume-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h4l5-5v16l-5-5H3zm11 4h8v2h-8m0-6h8v2h-8Z"></svg:path>`,
})
export class MdiVolumeEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
