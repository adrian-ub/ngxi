import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightVolumeHighIcon],svg[mdi-light-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12.5c0 3.97-3.09 7.23-7 7.5v-1c3.36-.27 6-3.08 6-6.5S17.36 6.27 14 6V5c3.91.27 7 3.53 7 7.5m-3 0c0 2.32-1.75 4.22-4 4.47v-1.01c1.7-.24 3-1.7 3-3.46s-1.3-3.22-3-3.46V8.03c2.25.25 4 2.15 4 4.47m-3 0c0 .65-.42 1.21-1 1.41v-2.82c.58.2 1 .76 1 1.41M2 9h4l4-4h2v15h-2l-4-4H2zm1 6h3.41l4 4H11V6h-.59l-4 4H3z"></svg:path>`,
})
export class MdiLightVolumeHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
