import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityPieChartOutlineBadgedIcon],svg[clarity-pie-chart-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M17 27a8 8 0 0 1 0-16v8h8a8 8 0 0 1-8 8m6.247-6.6H15.4v-7.598A6.4 6.4 0 0 0 17 25.4a6.4 6.4 0 0 0 6.247-5" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M19 9a8 8 0 0 1 8 8h-8Zm6.198 6.4a6.41 6.41 0 0 0-4.598-4.599V15.4Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityPieChartOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
