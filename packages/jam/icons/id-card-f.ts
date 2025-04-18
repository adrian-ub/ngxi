import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamIdCardFIcon],svg[jam-id-card-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h16c1.105 0 2 .831 2 1.857v9.286C20 12.169 19.105 13 18 13H2c-1.105 0-2-.831-2-1.857V1.857C0 .831.895 0 2 0m9 3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm0 3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zM3 3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class JamIdCardFIcon {
  readonly viewBox = input("-2 -5.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
