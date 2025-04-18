import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPiIcon],svg[ph-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 172a36 36 0 0 1-72 0V72H96v128a8 8 0 0 1-16 0V72h-8a40 40 0 0 0-40 40a8 8 0 0 1-16 0a56.06 56.06 0 0 1 56-56h152a8 8 0 0 1 0 16h-48v100a20 20 0 0 0 40 0a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhPiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
