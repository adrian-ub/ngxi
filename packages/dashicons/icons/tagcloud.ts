import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTagcloudIcon],svg[dashicons-tagcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3v4H1V3zm8 0v4h-7V3zM7 8v3H1V8zm12 0v3H8V8zM9 12v2H1v-2zm10 0v2h-9v-2zM6 15v1H1v-1zm5 0v1H7v-1zm3 0v1h-2v-1zm5 0v1h-4v-1z"></svg:path>`,
})
export class DashiconsTagcloudIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
