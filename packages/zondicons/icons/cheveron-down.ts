import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCheveronDownIcon],svg[zondicons-cheveron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828L5.757 6.586L4.343 8z"></svg:path>`,
})
export class ZondiconsCheveronDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
