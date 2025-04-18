import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSmokeDetectorAlertOutlineIcon],svg[mdi-smoke-detector-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h14zm-7-1c3.3 0 6-2.7 6-6s-2.7-6-6-6s-6 2.7-6 6s2.7 6 6 6m0-10c2.2 0 4 1.8 4 4s-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4m13-1h-2v6h2V8m0 7h-2v2h2z"></svg:path>`,
})
export class MdiSmokeDetectorAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
