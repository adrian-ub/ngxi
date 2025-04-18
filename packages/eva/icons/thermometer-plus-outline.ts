import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaThermometerPlusOutlineIcon],svg[eva-thermometer-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="2" x="2" y="5" fill="currentColor" rx="1" ry="1"></svg:rect><svg:rect width="6" height="2" x="2" y="5" fill="currentColor" rx="1" ry="1" transform="rotate(-90 5 6)"></svg:rect><svg:path fill="currentColor" d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3a3 3 0 0 1 3 3v8a5 5 0 0 1-3 9m0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 11 17a3 3 0 0 0 6 0a3 3 0 0 0-1.5-2.59a1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4"></svg:path>`,
})
export class EvaThermometerPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
