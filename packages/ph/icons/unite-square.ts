import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareIcon],svg[ph-unite-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 152V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8zm-68.69 56L48 100.69V59.31L196.69 208Zm-96-160h41.38L208 155.31v41.38ZM208 132.69L179.31 104H208Zm-56-56L123.31 48H152ZM48 123.31L76.69 152H48Zm56 56L132.69 208H104Z"></svg:path>`,
})
export class PhUniteSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
