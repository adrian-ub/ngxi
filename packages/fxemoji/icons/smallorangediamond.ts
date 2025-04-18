import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiSmallorangediamondIcon],svg[fxemoji-smallorangediamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF8E39" d="M413.82 266.006c5.412-5.412 5.412-14.267 0-19.678L264.689 97.197c-4.87-4.87-12.84-4.87-17.711 0L96.863 247.311c-4.87 4.87-4.87 12.84 0 17.711l149.131 149.131c5.412 5.412 14.267 5.412 19.678 0z"></svg:path>`,
})
export class FxemojiSmallorangediamondIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
