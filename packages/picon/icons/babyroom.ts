import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBabyroomIcon],svg[picon-babyroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h8v1M2 6V4H1V3h2v1h2V2h1v4m0-1l1-1l1 1l-1 1"></svg:path>`,
})
export class PiconBabyroomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
