import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceTouchIcon],svg[guidance-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 16v-3.5a3 3 0 0 0-3-3h-.5v11A3.5 3.5 0 0 1 9 24m10.5 0V12.5a3 3 0 0 0-3-3h-.901M16 12v-1a3 3 0 0 0-3-3h-.5v4V.5H12a3 3 0 0 0-3 3V13"></svg:path>`,
})
export class GuidanceTouchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
