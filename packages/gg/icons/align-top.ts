import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAlignTopIcon],svg[gg-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill-opacity=".5" d="m13.035 7.988l.002 6l4-.002l-.002-6z"></svg:path><svg:path d="M18 4.012L6 4.018v2l12-.006zm-6.963 15.974l-.005-12l-4 .002l.005 12z"></svg:path></svg:g>`,
})
export class GgAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
