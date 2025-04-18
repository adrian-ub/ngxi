import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSmokeDetectorAlertIcon],svg[mdi-smoke-detector-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18c3.3 0 6-2.7 6-6s-2.7-6-6-6s-6 2.7-6 6s2.7 6 6 6m7-15c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zM6 12c0-2.2 1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4s-4-1.8-4-4m17-5h-2v6h2V8m0 7h-2v2h2z"></svg:path>`,
})
export class MdiSmokeDetectorAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
