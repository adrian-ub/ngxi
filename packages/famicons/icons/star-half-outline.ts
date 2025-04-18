import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsStarHalfOutlineIcon],svg[famicons-star-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"></svg:path><svg:path fill="currentColor" d="M256 48v316L118 464l54-160l-140-96h172z"></svg:path>`,
})
export class FamiconsStarHalfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
