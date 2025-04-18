import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxChevronsUpIcon],svg[bx-chevrons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.293 11.293l1.414 1.414L12 8.414l4.293 4.293l1.414-1.414L12 5.586z"></svg:path><svg:path fill="currentColor" d="m6.293 16.293l1.414 1.414L12 13.414l4.293 4.293l1.414-1.414L12 10.586z"></svg:path>`,
})
export class BxChevronsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
