import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSelectArrowsIcon],svg[entypo-select-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1L5 8h10zm0 18l5-7H5z"></svg:path>`,
})
export class EntypoSelectArrowsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
