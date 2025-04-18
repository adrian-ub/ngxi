import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsControlsRepeatIcon],svg[dashicons-controls-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7v3l-2 1.5V5h11V3l4 3.01L14 9V7zm10 6v-3l2-1.5V15H6v2l-4-3.01L6 11v2z"></svg:path>`,
})
export class DashiconsControlsRepeatIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
