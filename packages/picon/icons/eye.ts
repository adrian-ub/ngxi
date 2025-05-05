import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEyeIcon],svg[picon-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v2h2M4 2C1 2 1 6 4 6s3-4 0-4m4 2c0 4-8 4-8 0s8-4 8 0"></svg:path>`,
})
export class PiconEyeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
