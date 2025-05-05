import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconExternalIcon],svg[picon-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6h6V5h1v3H0V0h3v1m4 1L3 6L2 5l4-4H4V0h4v4H7"></svg:path>`,
})
export class PiconExternalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
