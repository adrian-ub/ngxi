import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTriangleFlagIcon],svg[streamline-triangle-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5v13m0-13l9 4.5l-9 4.5"></svg:path>`,
})
export class StreamlineTriangleFlagIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
