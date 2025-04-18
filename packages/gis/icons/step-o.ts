import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisStepOIcon],svg[gis-step-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.451 5A2.5 3 0 0 0 0 8v84a2.5 3 0 0 0 3.365 2.815l95-42a2.5 3 0 0 0 0-5.63l-95-42a2.5 3 0 0 0-.914-.184M5 12.302l85.27 37.7L5 87.698Z" color="currentColor"></svg:path>`,
})
export class GisStepOIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
