import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTriangleUpIcon],svg[zmdi-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 102L77 320h273zm0-81l214 342H0z"></svg:path>`,
})
export class ZmdiTriangleUpIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
