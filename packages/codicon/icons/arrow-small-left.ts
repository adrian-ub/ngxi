import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArrowSmallLeftIcon],svg[codicon-arrow-small-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 10.7L4 8.2v-.7L6.5 5l.71.7l-1.64 1.65h5.57v1H5.57L7.22 10z"></svg:path>`,
})
export class CodiconArrowSmallLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
