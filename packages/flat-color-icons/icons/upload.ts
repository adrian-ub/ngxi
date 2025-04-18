import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsUploadIcon],svg[flat-color-icons-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#009688"><svg:path d="M24 10.9L35 24H13zM20 40h8v4h-8zm0-6h8v4h-8z"></svg:path><svg:path d="M20 21h8v11h-8zM6 4h36v4H6z"></svg:path></svg:g>`,
})
export class FlatColorIconsUploadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
