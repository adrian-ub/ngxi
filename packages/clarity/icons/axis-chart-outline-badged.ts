import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAxisChartOutlineBadgedIcon],svg[clarity-axis-chart-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="m6.007 26.731l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43l-19.729-.004l.009-13.726c0-.78-.84-1.26-1.51-.87c-.31.17-.5.51-.5.87z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAxisChartOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
