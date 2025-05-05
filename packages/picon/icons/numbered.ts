import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNumberedIcon],svg[picon-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v1h4V3M3 1v1h4V1M3 5v1h4V5M2 6H1l.5-.5L1 5h1m0-4h-.5v1H2M1 3l1 1H1l1-1"></svg:path>`,
})
export class PiconNumberedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
