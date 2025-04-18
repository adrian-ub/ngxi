import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDishIcon],svg[bx-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15c0-4.625-3.507-8.441-8-8.941V4h-2v2.059c-4.493.5-8 4.316-8 8.941v2h18zM5 15c0-3.859 3.141-7 7-7s7 3.141 7 7zm-3 3h20v2H2z"></svg:path>`,
})
export class BxDishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
