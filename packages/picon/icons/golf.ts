import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGolfIcon],svg[picon-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h1v1m2 0h3l1-2H2M0 1.5L4 0h1v7H4V3"></svg:path>`,
})
export class PiconGolfIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
