import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpRightIcon],svg[ph-arrow-u-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.34 130.34L204.69 96H88a48 48 0 0 0 0 96h88a8 8 0 0 1 0 16H88a64 64 0 0 1 0-128h116.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32-11.32"></svg:path>`,
})
export class PhArrowUUpRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
