import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsChevronsRightIcon],svg[bx-bxs-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.061 4.939l-2.122 2.122L15.879 12l-4.94 4.939l2.122 2.122L20.121 12z" fill="currentColor"></svg:path><svg:path d="M6.061 19.061L13.121 12l-7.06-7.061l-2.122 2.122L8.879 12l-4.94 4.939z" fill="currentColor"></svg:path>`,
})
export class BxBxsChevronsRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
