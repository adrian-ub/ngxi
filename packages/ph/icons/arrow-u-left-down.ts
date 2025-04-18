import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftDownIcon],svg[ph-arrow-u-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88v88a8 8 0 0 1-16 0V88a48 48 0 0 0-96 0v116.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L80 204.69V88a64 64 0 0 1 128 0"></svg:path>`,
})
export class PhArrowULeftDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
