import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubsetOfBoldIcon],svg[ph-subset-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 208a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h152a12 12 0 0 1 12 12m-12-52h-96a44 44 0 0 1 0-88h96a12 12 0 0 0 0-24h-96a68 68 0 0 0 0 136h96a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhSubsetOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
