import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPauseOutlineFilledIcon],svg[carbon-pause-outline-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 20h-2V10h2Zm6 0h-2V10h2Z"></svg:path>`,
})
export class CarbonPauseOutlineFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
