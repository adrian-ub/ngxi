import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionStraightRightFilledIcon],svg[carbon-direction-straight-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 21l-1.414-1.414L23.172 17H6v-2h17.172l-4.586-4.586L20 9l7 7Z"></svg:path><svg:path fill="none" d="m20 23l-1.414-1.414L23.172 17H6v-2h17.172l-4.586-4.586L20 9l7 7Z"></svg:path>`,
})
export class CarbonDirectionStraightRightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
