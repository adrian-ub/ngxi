import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionUTurnIcon],svg[carbon-direction-u-turn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.586 19.586L22 24.172V12a8 8 0 0 0-16 0v16h2V12a6 6 0 0 1 12 0v12.172l-4.586-4.586L14 21l7 7l7-7Z"></svg:path>`,
})
export class CarbonDirectionUTurnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
