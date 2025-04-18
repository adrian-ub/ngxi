import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryStraightFilledIcon],svg[carbon-direction-rotary-straight-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="19" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-6.414 10.414L17 7.828v6.273a5 5 0 0 1 0 9.798V28h-2v-4.101a5 5 0 0 1 0-9.798V7.828l-4.586 4.586L9 11l7-7l7 7Z"></svg:path><svg:path fill="none" d="M21.586 12.414L23 11l-7-7l-7 7l1.414 1.414L15 7.828v6.273a5 5 0 0 0 0 9.798V28h2v-4.101a5 5 0 0 0 0-9.798V7.828ZM19 19a3 3 0 1 1-3-3a3.003 3.003 0 0 1 3 3"></svg:path>`,
})
export class CarbonDirectionRotaryStraightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
