import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionSharpTurnFilledIcon],svg[carbon-direction-sharp-turn-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-2 24H16v-2h6.586L8 9.414V26H6V7a1 1 0 0 1 1.707-.707L24 22.586V16h2Z"></svg:path><svg:path fill="none" d="M26 26H16v-2h6.586L8 9.414V26H6V7a1 1 0 0 1 1.707-.707L24 22.586V16h2Z"></svg:path>`,
})
export class CarbonDirectionSharpTurnFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
