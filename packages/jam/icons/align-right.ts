import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamAlignRightIcon],svg[jam-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2M5 8h8a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"></svg:path>`,
})
export class JamAlignRightIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
