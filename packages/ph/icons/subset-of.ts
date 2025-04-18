import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubsetOfIcon],svg[ph-subset-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 208a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h152a8 8 0 0 1 8 8m-8-48h-96a48 48 0 0 1 0-96h96a8 8 0 0 0 0-16h-96a64 64 0 0 0 0 128h96a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhSubsetOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
