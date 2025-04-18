import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOvenBoldIcon],svg[ph-oven-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM68 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m44 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m44 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16M76 192h104a12 12 0 0 0 12-12v-60a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v60a12 12 0 0 0 12 12m12-60h80v36H88Z"></svg:path>`,
})
export class PhOvenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
