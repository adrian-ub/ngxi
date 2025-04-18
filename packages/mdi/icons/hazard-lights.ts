import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHazardLightsIcon],svg[mdi-hazard-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12l2.33 4H9.68zm0-4L6.21 18H17.8zm0-6L1 21h22zm0 4l7.53 13H4.47z"></svg:path>`,
})
export class MdiHazardLightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
