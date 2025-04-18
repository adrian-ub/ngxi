import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCallTransferIcon],svg[flat-color-icons-call-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="m39.2 8.4l-1.8 1.8c-6.3 6.5-5.4 22 0 27.6l1.8 1.8c.5.5 1.3.5 1.8 0l3.6-3.7c.5-.5.5-1.3 0-1.8l-3.4-3.4h-4.8c-1.3-1.3-1.3-12.1 0-13.4h4.8l3.3-3.4c.5-.5.5-1.3 0-1.8L41 8.4c-.5-.5-1.3-.5-1.8 0m-28 0l-1.8 1.8c-6.3 6.5-5.4 22 0 27.6l1.8 1.8c.5.5 1.3.5 1.8 0l3.6-3.7c.5-.5.5-1.3 0-1.8l-3.4-3.4H8.5c-1.3-1.3-1.3-12.1 0-13.4h4.8l3.3-3.4c.5-.5.5-1.3 0-1.8L13 8.4c-.5-.5-1.3-.5-1.8 0"></svg:path><svg:g fill="#2196F3"><svg:path d="m25.3 18.6l5.4 5.4l-5.4 5.4z"></svg:path><svg:path d="M16 22h11v4H16z"></svg:path></svg:g>`,
})
export class FlatColorIconsCallTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
