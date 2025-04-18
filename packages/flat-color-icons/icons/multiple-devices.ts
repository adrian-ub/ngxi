import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsMultipleDevicesIcon],svg[flat-color-icons-multiple-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#546E7A" d="M4 28V8c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#BBDEFB" d="M36 7H8c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1"></svg:path><svg:path fill="#37474F" d="M38 33H6c-2.2 0-4-1.8-4-4h40c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#E38939" d="M24 40V16c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4"></svg:path><svg:path fill="#FFF3E0" d="M40 15H28c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V16c0-.6-.4-1-1-1"></svg:path><svg:circle cx="34" cy="41.5" r="1.5" fill="#A6642A"></svg:circle>`,
})
export class FlatColorIconsMultipleDevicesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
