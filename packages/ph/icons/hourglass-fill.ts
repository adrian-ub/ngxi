import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHourglassFillIcon],svg[ph-hourglass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.08 16.08 0 0 0 6.41 12.8l52.26 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16 16 0 0 0-6.36-12.77L141.26 128l52.38-39.59A16.05 16.05 0 0 0 200 75.64"></svg:path>`,
})
export class PhHourglassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
