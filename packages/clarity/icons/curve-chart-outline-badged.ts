import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCurveChartOutlineBadgedIcon],svg[clarity-curve-chart-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M7 11.8a.8.8 0 1 1 0-1.6h6c2.404 0 3.368 1.707 4.653 6.278l.182.651l.184.651c1.313 4.595 2.53 6.42 4.981 6.42h6a.8.8 0 1 1 0 1.6h-6c-3.465 0-5.019-2.331-6.519-7.58l-.186-.66l-.182-.649C15.043 13.105 14.305 11.8 13 11.8z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCurveChartOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
