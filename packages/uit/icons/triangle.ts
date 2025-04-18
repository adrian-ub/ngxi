import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitTriangleIcon],svg[uit-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.934 20.006l-9.5-16.51a.52.52 0 0 0-.868 0l-9.5 16.51a.5.5 0 0 0 .434.749h19a.5.5 0 0 0 .434-.75m-18.57-.251L12 4.748l8.636 15.007z"></svg:path>`,
})
export class UitTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
