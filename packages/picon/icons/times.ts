import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTimesIcon],svg[picon-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l1-1l7 7l-1 1M1 8L0 7l7-7l1 1"></svg:path>`,
})
export class PiconTimesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
