import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineNightsStayIcon],svg[ic-baseline-nights-stay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42c.62-.27 1.29-.42 2-.42c1.66 0 3.18.83 4.1 2.15A4.01 4.01 0 0 1 11 18c0 1.52-.87 2.83-2.12 3.51c.98.32 2.03.5 3.11.5c3.5 0 6.58-1.8 8.37-4.52c-2.36.23-6.98-.97-9.26-5.41"></svg:path><svg:path fill="currentColor" d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class IcBaselineNightsStayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
