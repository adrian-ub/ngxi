import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRedTrianglePointedDownIcon],svg[openmoji-red-triangle-pointed-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA5A47" d="M38.455 57.146L60.68 18.65c1.09-1.89-.273-4.252-2.455-4.252H13.774c-2.182 0-3.546 2.363-2.455 4.252l22.226 38.496c1.091 1.89 3.819 1.89 4.91 0"></svg:path><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M38.455 57.146L60.68 18.65c1.09-1.89-.273-4.252-2.455-4.252H13.774c-2.182 0-3.546 2.363-2.455 4.252l22.226 38.496c1.091 1.89 3.819 1.89 4.91 0z"></svg:path>`,
})
export class OpenmojiRedTrianglePointedDownIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
