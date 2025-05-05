import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBallotIcon],svg[picon-ballot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6h6V1M0 8V0h8v8"></svg:path>`,
})
export class PiconBallotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
