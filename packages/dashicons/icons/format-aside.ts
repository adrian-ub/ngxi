import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsFormatAsideIcon],svg[dashicons-format-aside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h18v12l-6 6H1zm3 3v1h12V4zm0 4v1h12V8zm6 5v-1H4v1zm2 4l5-5h-5z"></svg:path>`,
})
export class DashiconsFormatAsideIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
