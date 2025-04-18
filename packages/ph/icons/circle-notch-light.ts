import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchLightIcon],svg[ph-circle-notch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 128a102 102 0 0 1-204 0c0-40.18 23.35-76.86 59.5-93.45a6 6 0 0 1 5 10.9C58.61 60.09 38 92.49 38 128a90 90 0 0 0 180 0c0-35.51-20.61-67.91-52.5-82.55a6 6 0 0 1 5-10.9C206.65 51.14 230 87.82 230 128"></svg:path>`,
})
export class PhCircleNotchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
