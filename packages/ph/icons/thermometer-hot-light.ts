import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phThermometerHotLightIcon],svg[ph-thermometer-hot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 154.6V48a6 6 0 0 0-12 0v106.6a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0m-38 99a50 50 0 0 1-28.57-91a6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 120 234m59-154.32a6 6 0 0 1 1.75-8.3c14.14-9.21 24.95-4.61 33.63-.9c7.9 3.37 13.6 5.8 22.37.09a6 6 0 1 1 6.55 10.05c-6.12 4-11.62 5.39-16.59 5.39c-6.51 0-12.11-2.39-17-4.49c-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-8.34-1.75m66 24.64a6 6 0 0 1-1.76 8.3c-6.12 4-11.62 5.39-16.59 5.39c-6.51 0-12.11-2.39-17-4.49c-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-6.55-10.05c14.14-9.21 24.95-4.6 33.63-.9c7.9 3.37 13.6 5.8 22.37.09a6 6 0 0 1 8.27 1.75"></svg:path>`,
})
export class PhThermometerHotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
