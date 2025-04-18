import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankDuotoneIcon],svg[lets-icons-blank-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M2 19a2 2 0 0 0 2 2h10.75a.25.25 0 0 0 .25-.25V16a2 2 0 0 1 2-2h4.75a.25.25 0 0 0 .25-.25V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></svg:path><svg:path fill="currentColor" d="M16 16v4.396c0 .223.27.335.427.177l5.146-5.146a.25.25 0 0 0-.177-.427H17a1 1 0 0 0-1 1"></svg:path>`,
})
export class LetsIconsBlankDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
