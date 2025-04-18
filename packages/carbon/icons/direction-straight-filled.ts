import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionStraightFilledIcon],svg[carbon-direction-straight-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-6.414 11.414L17 8.828V26h-2V8.828l-4.586 4.586L9 12l7-7l7 7Z"></svg:path><svg:path fill="none" d="M21.586 13.414L17 8.828V26h-2V8.828l-4.586 4.586L9 12l7-7l7 7Z"></svg:path>`,
})
export class CarbonDirectionStraightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
