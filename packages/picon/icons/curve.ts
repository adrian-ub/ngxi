import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCurveIcon],svg[picon-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8V6h2v2M0 2V0h2v2m0-1c8 1-2 4 3 5l1 1c-8-2 2-4-3-5"></svg:path>`,
})
export class PiconCurveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
