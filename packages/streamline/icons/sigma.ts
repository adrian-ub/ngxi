import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSigmaIcon],svg[streamline-sigma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.45 13.448H1.048a.5.5 0 0 1-.456-.307a.47.47 0 0 1 .109-.536l5.248-5.259a.496.496 0 0 0 0-.694L.701 1.393A.47.47 0 0 1 .59.858A.5.5 0 0 1 1.049.55H13.45"></svg:path>`,
})
export class StreamlineSigmaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
