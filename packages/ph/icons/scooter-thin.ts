import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScooterThinIcon],svg[ph-scooter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 140a31.3 31.3 0 0 0-6.24.62l-34-101.88A4 4 0 0 0 168 36h-32a4 4 0 0 0 0 8h29.12l19 57.14l-58 70.86H76a32 32 0 1 0-1 8h53a4 4 0 0 0 3.09-1.46l56.06-68.43l11 33A32 32 0 1 0 212 140M44 196a24 24 0 1 1 24-24a24 24 0 0 1-24 24m168 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhScooterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
