import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feSunriseIcon],svg[fe-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15H3a1 1 0 0 1 0-2h1a8 8 0 1 1 16 0h1a1 1 0 0 1 0 2m-3 4H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2M6 13h12a6 6 0 1 0-12 0"></svg:path>`,
})
export class FeSunriseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
