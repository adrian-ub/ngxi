import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBoxesIcon],svg[picon-boxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h1v1h1V5h1v3H0m4-3h1v1h1V5h1v3H4M2 1h1v1h1V1h1v3H2"></svg:path>`,
})
export class PiconBoxesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
