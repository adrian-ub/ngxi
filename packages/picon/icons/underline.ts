import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUnderlineIcon],svg[picon-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7V6h4v1M3 5L2 4V1h1v3h2V1h1v3L5 5"></svg:path>`,
})
export class PiconUnderlineIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
