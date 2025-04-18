import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAlignCenterIcon],svg[gg-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M9 13h6v4H9z"></svg:path><svg:path d="M6 7h12v4H6z"></svg:path></svg:g>`,
})
export class GgAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
