import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAlignMiddleIcon],svg[gg-align-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M13 9h4v6h-4z"></svg:path><svg:path d="M7 6h4v12H7z"></svg:path></svg:g>`,
})
export class GgAlignMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
