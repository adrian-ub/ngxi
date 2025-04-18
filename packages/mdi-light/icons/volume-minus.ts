import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightVolumeMinusIcon],svg[mdi-light-volume-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9h4l4-4h2v15h-2l-4-4H2zm1 6h3.41l4 4H11V6h-.59l-4 4H3zm11-2v-1h7v1z"></svg:path>`,
})
export class MdiLightVolumeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
