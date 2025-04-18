import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCarClutchIcon],svg[mdi-car-clutch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 18.84l4 1.86V23l-6-3v-6H5v-4h3V4l6-3v2.3l-4 1.86zM19 10h-4V5.41L12 6.8v10.4l3 1.4V14h4z"></svg:path>`,
})
export class MdiCarClutchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
