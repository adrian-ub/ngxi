import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPullClearIcon],svg[gg-pull-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 6H2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6h-2v10H4z"></svg:path><svg:path d="M6 12h12v2H6zm12-4H6v2h12z"></svg:path></svg:g>`,
})
export class GgPullClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
