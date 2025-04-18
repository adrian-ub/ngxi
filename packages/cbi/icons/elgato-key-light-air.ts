import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiElgatoKeyLightAirIcon],svg[cbi-elgato-key-light-air-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.84 1.71a7.66 7.66 0 0 1 7.66 7.67v5.76a7.66 7.66 0 0 1-7.66 7.66H9.16a7.66 7.66 0 0 1-7.66-7.66V9.38a7.66 7.66 0 0 1 7.66-7.67zm0-1H9.16A8.67 8.67 0 0 0 .5 9.38v5.76a8.66 8.66 0 0 0 8.66 8.66h6.68a8.66 8.66 0 0 0 8.66-8.66V9.38A8.67 8.67 0 0 0 15.84.71"></svg:path>`,
})
export class CbiElgatoKeyLightAirIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
