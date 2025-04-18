import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsVerticalSwitchIcon],svg[lets-icons-vertical-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 20l-.707.707l.707.707l.707-.707L8 20Zm2-15a1 1 0 1 0 0-2v2ZM3.293 16.707l4 4l1.414-1.414l-4-4l-1.414 1.414Zm5.414 4l4-4l-1.414-1.414l-4 4l1.414 1.414ZM9 20V6H7v14h2ZM9 6a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3h2Zm7-2l-.707-.707l.707-.707l.707.707L16 4Zm0 15h1h-1Zm-2 3a1 1 0 1 1 0-2v2ZM11.293 7.293l4-4l1.414 1.414l-4 4l-1.414-1.414Zm5.414-4l4 4l-1.414 1.414l-4-4l1.414-1.414ZM17 4v15h-2V4h2Zm0 15a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1h2Z"></svg:path>`,
})
export class LetsIconsVerticalSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
