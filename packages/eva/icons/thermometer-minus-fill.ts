import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaThermometerMinusFillIcon],svg[eva-thermometer-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="2" x="2" y="5" fill="currentColor" rx="1" ry="1"></svg:rect><svg:path fill="currentColor" d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3a3 3 0 0 1 3 3v8a5 5 0 0 1-3 9m1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54Z"></svg:path>`,
})
export class EvaThermometerMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
