import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAngleDoubleLeftIcon],svg[uim-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 16a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L14.664 12l2.293 2.293A1 1 0 0 1 16.25 16m-5.5 0a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L9.164 12l2.293 2.293A1 1 0 0 1 10.75 16"></svg:path>`,
})
export class UimAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
