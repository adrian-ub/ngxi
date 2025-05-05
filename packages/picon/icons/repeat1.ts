import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRepeat1Icon],svg[picon-repeat1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h4V4H6v2H3V5L1 6.5L3 8m0-4h1v1h1V3H4m3-1.5L5 0v1H1v3h1V2h3v1"></svg:path>`,
})
export class PiconRepeat1Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
