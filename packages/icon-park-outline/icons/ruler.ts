import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRulerIcon],svg[icon-park-outline-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 14L34 4l-3.75 3.75l-3.75 3.75L19 19l-7.5 7.5l-3.75 3.75L4 34l10 10zM30.25 7.75l-22.5 22.5M9 29l4 4m1-9l6 6m-1-11l4 4m1-9l6 6M29 9l4 4"></svg:path>`,
})
export class IconParkOutlineRulerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
