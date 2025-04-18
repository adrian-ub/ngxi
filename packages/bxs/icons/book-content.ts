import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBookContentIcon],svg[bxs-book-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m-1 4v2h-5V7zm-5 4h5v2h-5zM4 19V5h7v14z"></svg:path>`,
})
export class BxsBookContentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
