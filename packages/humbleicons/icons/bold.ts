import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBoldIcon],svg[humbleicons-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V4h6.25A3.75 3.75 0 0 1 17 7.75v0a3.75 3.75 0 0 1-3.75 3.75zm0 0V20h6.75A4.25 4.25 0 0 0 18 15.75v0a4.25 4.25 0 0 0-4.25-4.25z"></svg:path>`,
})
export class HumbleiconsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
