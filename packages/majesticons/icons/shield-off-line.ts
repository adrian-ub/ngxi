import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsShieldOffLineIcon],svg[majesticons-shield-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14V5c-1.5.167-5 0-7-2c-.571.571-1.265.993-2 1.3M5 5v9c0 4 7 7 7 7s3.204-1.373 5.277-3.5M3 3l18 18"></svg:path>`,
})
export class MajesticonsShieldOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
