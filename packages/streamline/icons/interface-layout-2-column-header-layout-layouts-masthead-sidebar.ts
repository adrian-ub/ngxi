import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLayout2ColumnHeaderLayoutLayoutsMastheadSidebarIcon],svg[streamline-interface-layout-2-column-header-layout-layouts-masthead-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 3.5h13m-9 0v10m9-5h-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLayout2ColumnHeaderLayoutLayoutsMastheadSidebarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
