import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSubtractSquareDuotoneIcon],svg[ph-subtract-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v120H96v-56h64V96Z" opacity=".2"></svg:path><svg:path d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8M48 48h104v104H48Zm160 160H104v-40h56a8 8 0 0 0 8-8v-56h40Z"></svg:path></svg:g>`,
})
export class PhSubtractSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
