import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditGridGridLayoutLayoutsModuleIcon],svg[streamline-interface-edit-grid-grid-layout-layouts-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M5 .5v13m4-13v13M13.5 5H.5m13 4H.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditGridGridLayoutLayoutsModuleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
