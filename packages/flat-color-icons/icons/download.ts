import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDownloadIcon],svg[flat-color-icons-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#1565C0"><svg:path d="M24 37.1L13 24h22zM20 4h8v4h-8zm0 6h8v4h-8z"></svg:path><svg:path d="M20 16h8v11h-8zM6 40h36v4H6z"></svg:path></svg:g>`,
})
export class FlatColorIconsDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
