import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTouch2FilledIcon],svg[carbon-touch-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12a3.003 3.003 0 0 0-3 3v3h6v-3a3.003 3.003 0 0 0-3-3"></svg:path><svg:path fill="currentColor" d="M16 6a9.01 9.01 0 0 0-9 9v13h18V15a9.01 9.01 0 0 0-9-9m5 14H11v-5a5 5 0 0 1 10 0Z"></svg:path><svg:path fill="currentColor" d="M29 15h-2a11 11 0 0 0-22 0H3a13 13 0 0 1 26 0"></svg:path>`,
})
export class CarbonTouch2FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
