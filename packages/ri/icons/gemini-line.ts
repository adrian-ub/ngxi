import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGeminiLineIcon],svg[ri-gemini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.124 1.09h1.751l.052.855a9.743 9.743 0 0 0 9.128 9.128l.854.052v1.75l-.854.052a9.743 9.743 0 0 0-9.128 9.128l-.052.855h-1.75l-.052-.855a9.743 9.743 0 0 0-9.128-9.128l-.854-.051v-1.751l.854-.052a9.743 9.743 0 0 0 9.128-9.128zM12 5.85A11.6 11.6 0 0 1 5.85 12A11.6 11.6 0 0 1 12 18.15A11.6 11.6 0 0 1 18.15 12A11.6 11.6 0 0 1 12 5.85"></svg:path>`,
})
export class RiGeminiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
