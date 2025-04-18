import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feStepBackwardIcon],svg[fe-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15V5H4a1 1 0 1 1 0-2h16a1 1 0 0 1 0 2h-7v10h2.24c.15 0 .297.042.421.12c.35.219.444.663.211.991l-3.24 4.57a.7.7 0 0 1-.21.199a.79.79 0 0 1-1.054-.198l-3.24-4.57A.7.7 0 0 1 8 15.714c0-.395.34-.715.76-.715zm9-6a1 1 0 0 1 0 2h-5V9zM8 9h1v2H4a1 1 0 0 1 0-2z"></svg:path>`,
})
export class FeStepBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
