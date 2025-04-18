import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisStepIcon],svg[gis-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.451 5A2.5 3 0 0 0 0 8v84a2.5 3 0 0 0 3.365 2.815l95-42a2.5 3 0 0 0 0-5.63l-95-42a2.5 3 0 0 0-.914-.184" color="currentColor"></svg:path>`,
})
export class GisStepIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
