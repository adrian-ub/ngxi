import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJerricanIcon],svg[picon-jerrican-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h4l1 1l1-1h2v1H7L6 3l1 1v4H0m1-5h3L3 2H1"></svg:path>`,
})
export class PiconJerricanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
