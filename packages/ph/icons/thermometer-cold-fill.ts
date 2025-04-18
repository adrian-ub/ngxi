import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phThermometerColdFillIcon],svg[ph-thermometer-cold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.91 77.72l-20 6.49l12.34 17a8 8 0 1 1-12.94 9.4l-12.31-17l-12.34 17a8 8 0 0 1-12.94-9.4l12.34-17l-20-6.49A8 8 0 0 1 188 62.5l20 6.5V48a8 8 0 0 1 16 0v21l20-6.49a8 8 0 0 1 4.95 15.22ZM176 192a56 56 0 1 1-88-46V40a32 32 0 0 1 64 0v106a56.23 56.23 0 0 1 24 46m-95.18-8h78.36A40.16 40.16 0 0 0 140 157.35a8 8 0 0 1-4-6.93V40a16 16 0 0 0-32 0v110.42a8 8 0 0 1-4 6.93A40.16 40.16 0 0 0 80.82 184"></svg:path>`,
})
export class PhThermometerColdFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
