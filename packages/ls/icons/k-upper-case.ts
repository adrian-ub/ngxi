import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsKUpperCaseIcon],svg[ls-k-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467 0L117 331l374 404h-94L71 384v351H0V0h71v280L368 0z"></svg:path>`,
})
export class LsKUpperCaseIcon {
  readonly viewBox = input("0 0 491 735")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
