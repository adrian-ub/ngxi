import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsChevronsDownIcon],svg[bx-bxs-chevrons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16.939 10.939L12 15.879l-4.939-4.94l-2.122 2.122L12 20.121l7.061-7.06z" fill="currentColor"></svg:path><svg:path d="M16.939 3.939L12 8.879l-4.939-4.94l-2.122 2.122L12 13.121l7.061-7.06z" fill="currentColor"></svg:path>`,
})
export class BxBxsChevronsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
