import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCompassFillIcon],svg[ph-compass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m51.58 57.79l-32 64a4.08 4.08 0 0 1-1.79 1.79l-64 32a4 4 0 0 1-5.37-5.37l32-64a4.08 4.08 0 0 1 1.79-1.79l64-32a4 4 0 0 1 5.37 5.37"></svg:path>`,
})
export class PhCompassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
