import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSubtractSelectionOneIcon],svg[icon-park-outline-subtract-selection-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 16h9a2 2 0 0 1 2 2v23a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-9"></svg:path><svg:rect width="27" height="27" x="5" y="5" rx="2"></svg:rect><svg:path d="M18 5L5 19M27 5L5 29m27-19L12 32m20-11L22 32"></svg:path></svg:g>`,
})
export class IconParkOutlineSubtractSelectionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
