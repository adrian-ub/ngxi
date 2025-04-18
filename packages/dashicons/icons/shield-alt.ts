import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsShieldAltIcon],svg[dashicons-shield-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2s3 2 7 2c0 11-7 14-7 14S3 15 3 4c4 0 7-2 7-2"></svg:path>`,
})
export class DashiconsShieldAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
