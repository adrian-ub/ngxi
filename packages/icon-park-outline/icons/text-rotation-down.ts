import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTextRotationDownIcon],svg[icon-park-outline-text-rotation-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m29 35l-8-3.667M29 13l-8 3.667m0 0L17 18.5L5 24l12 5.5l4 1.833m0-14.666v14.666M37 6v36l6-6"></svg:path>`,
})
export class IconParkOutlineTextRotationDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
