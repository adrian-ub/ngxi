import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsShieldIcon],svg[dashicons-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2s3 2 7 2c0 11-7 14-7 14S3 15 3 4c4 0 7-2 7-2m0 8h5s1-1 1-5c0 0-5-1-6-2zH5c1 4 5 7 5 7z"></svg:path>`,
})
export class DashiconsShieldIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
