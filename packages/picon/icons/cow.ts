import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCowIcon],svg[picon-cow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6v2H0V2h3v1l3 3v2H5V6m0-1V3H4V0l1 2h2l1-2v3H7v2"></svg:path>`,
})
export class PiconCowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
