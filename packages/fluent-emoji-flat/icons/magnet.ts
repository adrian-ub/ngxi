import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatMagnetIcon],svg[fluent-emoji-flat-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M11 23v6.06c0 .52-.42.94-.94.94H3.94c-.52 0-.94-.42-.94-.94V23l4.028-2.152zm18 0v6.06c0 .52-.42.94-.94.94h-6.12c-.52 0-.94-.42-.94-.94V23l3.99-2.152z"></svg:path><svg:path fill="#F8312F" d="M11 23v-7.94c0-2.75 2.2-5.04 4.95-5.06c2.78-.03 5.05 2.23 5.05 5v8h8v-8c0-7.18-5.82-13-13-13S3 7.82 3 15v8z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatMagnetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
