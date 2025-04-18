import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightPowerIcon],svg[mdi-light-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13V4h1v9zm8-.5a7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 4 12.5c0-2.71 1.44-5.09 3.6-6.4l.73.73A6.48 6.48 0 0 0 5 12.5a6.5 6.5 0 0 0 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5c0-2.44-1.34-4.56-3.33-5.67l.73-.73a7.48 7.48 0 0 1 3.6 6.4"></svg:path>`,
})
export class MdiLightPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
