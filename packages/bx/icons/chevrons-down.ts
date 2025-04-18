import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxChevronsDownIcon],svg[bx-chevrons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.586l-4.293-4.293l-1.414 1.414L12 18.414l5.707-5.707l-1.414-1.414z"></svg:path><svg:path fill="currentColor" d="m17.707 7.707l-1.414-1.414L12 10.586L7.707 6.293L6.293 7.707L12 13.414z"></svg:path>`,
})
export class BxChevronsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
