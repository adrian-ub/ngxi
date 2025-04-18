import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsChevronsLeftIcon],svg[bxs-chevrons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.121 12l4.94-4.939l-2.122-2.122L3.879 12l7.06 7.061l2.122-2.122z"></svg:path><svg:path fill="currentColor" d="M17.939 4.939L10.879 12l7.06 7.061l2.122-2.122L15.121 12l4.94-4.939z"></svg:path>`,
})
export class BxsChevronsLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
