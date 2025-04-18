import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRunMirrorIcon],svg[carbon-run-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19v6l5-3z"></svg:path><svg:path fill="currentColor" d="M11 16c3.3 0 6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6s2.7-6 6-6m0-2c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M4 6v6h22v14h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2m2 4V6h20v4z"></svg:path>`,
})
export class CarbonRunMirrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
