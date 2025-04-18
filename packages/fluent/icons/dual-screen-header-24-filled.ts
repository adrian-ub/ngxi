import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreenHeader24FilledIcon],svg[fluent-dual-screen-header-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.995 7.997V18.25a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.255-.019l-.001-11.984zm-10.752 0V19.98q-.12.017-.245.017H3.75A1.75 1.75 0 0 1 2 18.247V7.997zm-.245-3.995q.124 0 .246.017l-.001 2.978H2V5.752c0-.967.784-1.75 1.75-1.75zm9.248.002c.966 0 1.75.784 1.75 1.75l-.001 1.243h-9.253V4.023q.127-.019.256-.019z"></svg:path>`,
})
export class FluentDualScreenHeader24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
