import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPercentageCircleIcon],svg[mynaui-percentage-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M9.854 9.854L9.5 9.5m5.004 5.004l-.354-.354m-4.65.35l5-5"></svg:path>`,
})
export class MynauiPercentageCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
