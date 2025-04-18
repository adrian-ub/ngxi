import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceHoldTightIcon],svg[guidance-hold-tight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 8.5h4.5A3.5 3.5 0 0 0 10 5h4.5m3 0h3v.5a3 3 0 0 1-3 3h-4h5.25a1.75 1.75 0 1 1 0 3.5H16.5h1.25a1.75 1.75 0 1 1 0 3.5H16.5h.25a1.75 1.75 0 1 1 0 3.5H2M16 8.5V0m0 24v-5"></svg:path>`,
})
export class GuidanceHoldTightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
