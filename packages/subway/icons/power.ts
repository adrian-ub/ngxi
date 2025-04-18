import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPowerIcon],svg[subway-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M439.6 0H204.9L55.4 256h149.5l-128 256l341.3-320H247.5z"></svg:path>`,
})
export class SubwayPowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
