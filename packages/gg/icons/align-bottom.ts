import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAlignBottomIcon],svg[gg-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M13 10h4v6h-4z"></svg:path><svg:path d="M11 4H7v12h4zm7 14H6v2h12z"></svg:path></svg:g>`,
})
export class GgAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
