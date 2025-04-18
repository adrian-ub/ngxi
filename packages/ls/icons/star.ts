import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsStarIcon],svg[ls-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m148 739l241-125l241 125l-46-267l194-189l-269-39L389 0L269 244L0 283l195 189z"></svg:path>`,
})
export class LsStarIcon {
  readonly viewBox = input("0 0 778 739")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
