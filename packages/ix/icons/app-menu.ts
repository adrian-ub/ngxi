import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAppMenuIcon],svg[ix-app-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.666 106.667h426.667v42.666H42.666zm0 128H320v42.666H42.666zm426.667 128H42.666v42.666h426.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxAppMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
