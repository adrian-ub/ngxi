import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiUpPointingTriangleWithRightHalfBlackIcon],svg[openmoji-up-pointing-triangle-with-right-half-black-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M37.039 14H35v43h25.962L62 56z"></svg:path><svg:path fill="#fff" d="M35 14h1v43H11l-1-1z"></svg:path><svg:path fill="#3F3F3F" d="M37.039 14H35v43h25.962L62 56z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="M33.545 15.252L11.32 53.748c-1.09 1.89.273 4.252 2.455 4.252h44.452c2.182 0 3.546-2.362 2.455-4.252L38.455 15.252c-1.091-1.89-3.819-1.89-4.91 0Z"></svg:path><svg:path stroke-linecap="round" d="M36 14.5V55"></svg:path></svg:g>`,
})
export class OpenmojiUpPointingTriangleWithRightHalfBlackIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
