import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDownLongIcon],svg[lets-icons-arrow-down-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17V3"></svg:path><svg:path fill="currentColor" d="m12.203 21.715l3.893-5.45a.8.8 0 0 0-.65-1.265H8.554a.8.8 0 0 0-.651 1.265l3.893 5.45c.1.14.307.14.406 0"></svg:path></svg:g>`,
})
export class LetsIconsArrowDownLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
