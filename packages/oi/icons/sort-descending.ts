import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiSortDescendingIcon],svg[oi-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v6H0l2.5 2L5 6H3V0zm2 0v1h4V0zm0 2v1h3V2zm0 2v1h2V4z"></svg:path>`,
})
export class OiSortDescendingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
