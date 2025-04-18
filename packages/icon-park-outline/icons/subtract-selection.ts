import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSubtractSelectionIcon],svg[icon-park-outline-subtract-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="27" height="27" x="16" y="16" rx="2"></svg:rect><svg:path d="M16 32H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h23a2 2 0 0 1 2 2v9m-3 0L16 30m22-14L16 40m27-19L23 43m20-11L33 43"></svg:path></svg:g>`,
})
export class IconParkOutlineSubtractSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
