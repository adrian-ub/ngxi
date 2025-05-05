import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLifterIcon],svg[picon-lifter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h2l1 4H1m2-5H0v8l1-1l1 1h2l1-3m0 3V1h1v6h1l1 1"></svg:path>`,
})
export class PiconLifterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
