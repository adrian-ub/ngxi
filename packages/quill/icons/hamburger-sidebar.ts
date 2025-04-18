import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillHamburgerSidebarIcon],svg[quill-hamburger-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8h15M5 16h22M5 24h22M5 11l3-3l-3-3"></svg:path>`,
})
export class QuillHamburgerSidebarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
