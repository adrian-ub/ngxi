import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNextcloudsmsIcon],svg[arcticons-nextcloudsms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.55 5.43a2.05 2.05 0 0 0-2 2.05v22.58a2.05 2.05 0 0 0 2.05 2.06h6l11.59 8a1 1 0 0 0 1.57-.82v-7.18h15.69a2.05 2.05 0 0 0 2-2.06V7.48a2.05 2.05 0 0 0-2-2.05Zm1.08 6.13h32.74M7.63 18.77h32.74M7.63 25.99H20.9"></svg:path>`,
})
export class ArcticonsNextcloudsmsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
