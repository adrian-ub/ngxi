import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStampIcon],svg[picon-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h3V2q-4-1 1-2q5 1 1 2v2h3v2H0m1 1h6v1H1"></svg:path>`,
})
export class PiconStampIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
