import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShrineIcon],svg[picon-shrine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2L4 4l-.5-2M5 7V2h1v6M2 8V2h1v5M1 4V3h6v1M1 2L0 0l4 1l4-1l-1 2"></svg:path>`,
})
export class PiconShrineIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
