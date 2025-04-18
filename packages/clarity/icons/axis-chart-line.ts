import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityAxisChartLineIcon],svg[clarity-axis-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="m6.007 26.731l21.723-.001c.76-.06 1.18-.93.74-1.56a.97.97 0 0 0-.74-.43l-19.729-.004l.009-13.726c0-.78-.84-1.26-1.51-.87c-.31.17-.5.51-.5.87z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityAxisChartLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
