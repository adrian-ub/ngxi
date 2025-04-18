import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayout4LineIcon],svg[ri-layout-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 10H5v6h6zm2 6h6V5h-6zM11 5H5v6h6z"></svg:path>`,
})
export class RiLayout4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
