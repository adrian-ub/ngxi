import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconEyeIcon],svg[octicon-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4c0-2.2 1.8-4 4-4c2.22 0 4 1.8 4 4c0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2c0-1.11.89-2 2-2c1.11 0 2 .89 2 2z" fill="currentColor"></svg:path>`,
})
export class OcticonEyeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
