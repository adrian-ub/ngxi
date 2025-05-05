import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBeltIcon],svg[picon-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v4h1V2M1 7V1l2 1v4M0 5V3h1v2m6 0v3L4 7V1l3-1v3h1v2"></svg:path>`,
})
export class PiconBeltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
