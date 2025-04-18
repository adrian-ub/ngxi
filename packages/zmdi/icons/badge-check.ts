import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBadgeCheckIcon],svg[zmdi-badge-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 5q18 0 30.5 12.5T384 48v276q0 23-19 35L192 475L19 359Q0 347 0 324V48q0-18 12.5-30.5T43 5zM149 325l192-192l-30-30l-162 162l-76-76l-30 30z"></svg:path>`,
})
export class ZmdiBadgeCheckIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
