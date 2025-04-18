import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRedTrianglePointedUpIcon],svg[openmoji-red-triangle-pointed-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA5A47" d="M33.545 15.252L11.32 53.748c-1.09 1.89.273 4.252 2.455 4.252h44.452c2.182 0 3.546-2.362 2.455-4.252L38.455 15.252c-1.091-1.89-3.819-1.89-4.91 0"></svg:path><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M33.545 15.252L11.32 53.748c-1.09 1.89.273 4.252 2.455 4.252h44.452c2.182 0 3.546-2.362 2.455-4.252L38.455 15.252c-1.091-1.89-3.819-1.89-4.91 0z"></svg:path>`,
})
export class OpenmojiRedTrianglePointedUpIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
