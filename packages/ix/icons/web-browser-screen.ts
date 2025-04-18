import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWebBrowserScreenIcon],svg[ix-web-browser-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333v341.334h426.666V85.333zm384 42.667v42.667H256V128zm-213.334 0v42.667h-42.666V128zM128 128v42.667H85.333V128zM85.333 384V213.333h341.334V384z" clip-rule="evenodd"></svg:path>`,
})
export class IxWebBrowserScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
