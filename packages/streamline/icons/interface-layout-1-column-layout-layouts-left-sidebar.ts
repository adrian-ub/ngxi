import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLayout1ColumnLayoutLayoutsLeftSidebarIcon],svg[streamline-interface-layout-1-column-layout-layouts-left-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M5.5.5v13m0-6.5h8"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLayout1ColumnLayoutLayoutsLeftSidebarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
