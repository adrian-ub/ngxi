import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderOutsideIcon],svg[mdi-border-outside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11H7v2h2m4 2h-2v2h2m6 2H5V5h14M3 21h18V3H3m14 8h-2v2h2m-4-2h-2v2h2m0-6h-2v2h2z"></svg:path>`,
})
export class MdiBorderOutsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
