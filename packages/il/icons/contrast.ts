import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilContrastIcon],svg[il-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M371 8q76 0 144 29t118 79t79 118t29 145t-29 144t-79 118t-118 80t-144.5 29T227 721t-118-80t-80-118T0 379t29-145t80-118t118-79T371 8m0 117q0-11-7-18t-19-5q-53 5-99 28t-80 61t-53 85t-20 103t20 102t53 86t80 60t99 29q11 1 19-6t7-17z"></svg:path>`,
})
export class IlContrastIcon {
  readonly viewBox = input("0 0 750 850")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
