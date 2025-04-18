import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderCloseFillIcon],svg[ri-folder-close-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12c1.093 0 2.117.292 3 .803V6a1 1 0 0 0-1-1h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10.803A6 6 0 0 1 19 12m1.414 6l2.122 2.121l-1.415 1.414l-2.12-2.12l-2.122 2.12l-1.414-1.414L17.585 18l-2.12-2.121l1.414-1.415L19 16.586l2.121-2.122l1.415 1.415z"></svg:path>`,
})
export class RiFolderCloseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
