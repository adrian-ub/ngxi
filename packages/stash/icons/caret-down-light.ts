import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCaretDownLightIcon],svg[stash-caret-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.36 14.227l-3.199-3.636c-.395-.45-.019-1.091.64-1.091H15.2c.659 0 1.035.641.64 1.09l-3.2 3.637c-.32.364-.959.364-1.279 0"></svg:path>`,
})
export class StashCaretDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
