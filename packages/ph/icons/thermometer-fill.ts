import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phThermometerFillIcon],svg[ph-thermometer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 56a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-60 50.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M136 104h-32V40a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class PhThermometerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
