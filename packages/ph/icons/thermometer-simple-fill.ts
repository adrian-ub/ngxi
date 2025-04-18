import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phThermometerSimpleFillIcon],svg[ph-thermometer-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 146.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M128 24a16 16 0 0 1 16 16v64h-32V40a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhThermometerSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
