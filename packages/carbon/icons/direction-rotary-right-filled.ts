import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryRightFilledIcon],svg[carbon-direction-rotary-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11" cy="11" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 16l-1.414-1.414L23.172 12h-7.273A5.01 5.01 0 0 1 12 15.899V26h-2V15.899A5 5 0 1 1 15.899 10h7.273l-4.586-4.586L20 4l7 7Z"></svg:path><svg:path fill="none" d="m20 4l-1.414 1.414L23.172 10h-7.273A5 5 0 1 0 10 15.899V26h2V15.899A5.01 5.01 0 0 0 15.899 12h7.273l-4.586 4.586L20 18l7-7Zm-9 10a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonDirectionRotaryRightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
