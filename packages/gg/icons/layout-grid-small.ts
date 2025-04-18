import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLayoutGridSmallIcon],svg[gg-layout-grid-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h2v2H7zm4 0h2v2h-2zm6 0h-2v2h2zM7 11h2v2H7zm6 0h-2v2h2zm2 0h2v2h-2zm-6 4H7v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"></svg:path>`,
})
export class GgLayoutGridSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
