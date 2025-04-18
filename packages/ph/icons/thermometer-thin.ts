import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phThermometerThinIcon],svg[ph-thermometer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 60a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-88 56.29V88a4 4 0 0 0-8 0v68.29a28 28 0 1 0 8 0M120 204a20 20 0 1 1 20-20a20 20 0 0 1-20 20m36-68V48a36 36 0 0 0-72 0v88a60 60 0 1 0 72 0m-36 100a52 52 0 0 1-29.71-94.68A4 4 0 0 0 92 138V48a28 28 0 0 1 56 0v90a4 4 0 0 0 1.71 3.28A52 52 0 0 1 120 236"></svg:path>`,
})
export class PhThermometerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
