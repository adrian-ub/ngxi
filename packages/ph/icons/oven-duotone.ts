import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOvenDuotoneIcon],svg[ph-oven-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 112v72H72v-72Z" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM72 76a12 12 0 1 1 12 12a12 12 0 0 1-12-12m44 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m44 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12m24 28H72a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8m-8 72H80v-56h96Z"></svg:path></svg:g>`,
})
export class PhOvenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
