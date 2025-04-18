import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibCevoIcon],svg[cib-cevo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.667 8h16l8 13.734L32 16L24 2.135H8zm-1.198 2L0 16l8 13.865h16l3.469-6l-3.333-5.729l-3.469 6h-9.333l-4.667-8.135l3.469-6z"></svg:path>`,
})
export class CibCevoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
