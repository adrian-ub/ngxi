import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPathFillIcon],svg[ph-path-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 200a28 28 0 0 1-54.83 8H72a48 48 0 0 1 0-96h96a24 24 0 0 0 0-48H72a8 8 0 0 1 0-16h96a40 40 0 0 1 0 80H72a32 32 0 0 0 0 64h101.17a28 28 0 0 1 54.83 8"></svg:path>`,
})
export class PhPathFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
