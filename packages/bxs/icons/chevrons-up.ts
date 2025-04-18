import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsChevronsUpIcon],svg[bxs-chevrons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.879l-7.061 7.06l2.122 2.122L12 8.121l4.939 4.94l2.122-2.122z"></svg:path><svg:path fill="currentColor" d="m4.939 17.939l2.122 2.122L12 15.121l4.939 4.94l2.122-2.122L12 10.879z"></svg:path>`,
})
export class BxsChevronsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
