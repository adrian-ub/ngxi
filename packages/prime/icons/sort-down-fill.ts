import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeSortDownFillIcon],svg[prime-sort-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7.75a.75.75 0 0 0-.53 1.28l7 7a.75.75 0 0 0 1.06 0l7-7A.75.75 0 0 0 19 7.75z"></svg:path>`,
})
export class PrimeSortDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
