import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilDiceFourIcon],svg[uil-dice-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14a1 1 0 1 0 1 1a1 1 0 0 0-1-1M9 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 6a1 1 0 1 0 1 1a1 1 0 0 0-1-1m6-6a1 1 0 1 0 1 1a1 1 0 0 0-1-1m2-6H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z"></svg:path>`,
})
export class UilDiceFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
