import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSidebarIcon],svg[whh-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768-160q0 13 9.5 22.5t22.5 9.5h352V448h-384zm384-736h-352q-13 0-22.5 9.5t-9.5 22.5v160h384zm384 32q0-13-9.5-22.5t-22.5-9.5h-224v768h224q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhSidebarIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
