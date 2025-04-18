import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxChevronsLeftIcon],svg[bx-chevrons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.707 7.707l-1.414-1.414L5.586 12l5.707 5.707l1.414-1.414L8.414 12z"></svg:path><svg:path fill="currentColor" d="M16.293 6.293L10.586 12l5.707 5.707l1.414-1.414L13.414 12l4.293-4.293z"></svg:path>`,
})
export class BxChevronsLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
