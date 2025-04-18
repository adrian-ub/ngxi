import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTabletLandscapeIcon],svg[carbon-tablet-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 13h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M30 7v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h24a2.003 2.003 0 0 1 2 2M4 25h24V7H4Z"></svg:path>`,
})
export class CarbonTabletLandscapeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
