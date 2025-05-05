import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBottleIcon],svg[picon-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V3l1.5-1V0h1v2L6 3v5M5 4H3v2h2"></svg:path>`,
})
export class PiconBottleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
