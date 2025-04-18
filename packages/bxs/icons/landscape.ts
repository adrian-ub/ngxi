import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsLandscapeIcon],svg[bxs-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6.5" cy="6.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m14 7l-5.223 8.487L7 13l-5 7h20z"></svg:path>`,
})
export class BxsLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
