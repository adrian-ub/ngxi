import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLandPlotsIcon],svg[mdi-land-plots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M4 4h4v10H4zm0 16v-4h4v4zm16 0H10V10h10zm0-12H10V4h10z"></svg:path>`,
})
export class MdiLandPlotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
