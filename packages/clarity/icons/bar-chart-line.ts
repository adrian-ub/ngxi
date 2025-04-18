import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBarChartLineIcon],svg[clarity-bar-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M7 10h6v16h-1.6V11.6H8.6V26H7Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M15 19h6v7h-1.6v-5.4h-2.8V26H15Z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M23 16h6v10h-1.6v-8.4h-2.8V26H23Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBarChartLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
