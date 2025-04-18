import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRefreshIcon],svg[flat-color-icons-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#1565C0"><svg:path d="M13 13c0-3.3 2.7-6 6-6h10c3.3 0 6 2.7 6 6h4c0-5.5-4.5-10-10-10H19C13.5 3 9 7.5 9 13v11.2h4z"></svg:path><svg:path d="m4.6 22l6.4 8.4l6.4-8.4z"></svg:path></svg:g><svg:g fill="#1565C0"><svg:path d="M35 35c0 3.3-2.7 6-6 6H19c-3.3 0-6-2.7-6-6H9c0 5.5 4.5 10 10 10h10c5.5 0 10-4.5 10-10V23h-4z"></svg:path><svg:path d="m30.6 26l6.4-8.4l6.4 8.4z"></svg:path></svg:g>`,
})
export class FlatColorIconsRefreshIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
