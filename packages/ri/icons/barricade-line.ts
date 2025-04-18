import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBarricadeLineIcon],svg[ri-barricade-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.493 19h11.014l-.667-3H7.16zm13.063 0H21v2H3v-2h1.444L7.826 3.783A1 1 0 0 1 8.802 3h6.396a1 1 0 0 1 .976.783zM7.604 14h8.792l-.89-4H8.494zm1.334-6h6.124l-.666-3H9.604z"></svg:path>`,
})
export class RiBarricadeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
