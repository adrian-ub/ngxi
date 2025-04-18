import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDiffMultipleIcon],svg[codicon-diff-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m9.71 1.29l3 3L13 5v9l-1 1H3l-1-1V2l1-1h6zM3 14h9V5L9 2H3zm4-8H5v1h2v2h1V7h2V6H8V4H7zm-2 5h5v1H5z" clip-rule="evenodd"></svg:path><svg:path d="m12.42 1l2.29 2.29L15 4v10l-1 1V4l-3-3z"></svg:path></svg:g>`,
})
export class CodiconDiffMultipleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
