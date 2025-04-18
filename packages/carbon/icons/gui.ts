import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGuiIcon],svg[carbon-gui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="23" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="26" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v4H4V6ZM4 12h6v14H4Zm8 14V12h16v14Z"></svg:path>`,
})
export class CarbonGuiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
