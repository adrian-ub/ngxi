import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAlignLeftIcon],svg[gg-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M8 13h6v4H8z"></svg:path><svg:path d="M6 6H4v12h2zm14 1H8v4h12z"></svg:path></svg:g>`,
})
export class GgAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
