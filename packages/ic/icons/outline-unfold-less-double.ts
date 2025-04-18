import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineUnfoldLessDoubleIcon],svg[ic-outline-unfold-less-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.58 1.41L15.16 0l-3.17 3.17L8.82 0L7.41 1.41L11.99 6z"></svg:path><svg:path fill="currentColor" d="M16.58 6.41L15.16 5l-3.17 3.17L8.82 5L7.41 6.41L11.99 11zM7.42 17.59L8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"></svg:path><svg:path fill="currentColor" d="M7.42 22.59L8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z"></svg:path>`,
})
export class IcOutlineUnfoldLessDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
