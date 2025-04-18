import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCloudChartSolidIcon],svg[clarity-cloud-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2m-23.636 6.364c-3.515 3.514-4.465 8.263-2.121 10.606s7.091 1.394 10.606-2.121s4.465-8.263 2.122-10.606s-7.092-1.394-10.607 2.121M25 19a3 3 0 1 0 0 6a3 3 0 0 0 0-6" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCloudChartSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
