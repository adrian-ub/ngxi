import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpRightFillIcon],svg[ph-arrow-u-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 136V96H88a48 48 0 0 0 0 96h88a8 8 0 0 1 0 16H88a64 64 0 0 1 0-128h80V40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32l-48 48A8 8 0 0 1 168 136"></svg:path>`,
})
export class PhArrowUUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
