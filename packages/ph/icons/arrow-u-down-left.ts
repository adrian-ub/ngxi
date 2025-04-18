import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownLeftIcon],svg[ph-arrow-u-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 112a64.07 64.07 0 0 1-64 64H51.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L51.31 160H168a48 48 0 0 0 0-96H80a8 8 0 0 1 0-16h88a64.07 64.07 0 0 1 64 64"></svg:path>`,
})
export class PhArrowUDownLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
