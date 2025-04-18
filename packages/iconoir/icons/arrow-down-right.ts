import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirArrowDownRightIcon],svg[iconoir-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 6l13 13m0 0V6.52M19 19H6.52"></svg:path>`,
})
export class IconoirArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
