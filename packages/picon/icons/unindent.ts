import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUnindentIcon],svg[picon-unindent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v1H0V6m8-2v1H3V4m-3-.5L2 5V2m6 0v1H3V2m5-2v1H0V0"></svg:path>`,
})
export class PiconUnindentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
