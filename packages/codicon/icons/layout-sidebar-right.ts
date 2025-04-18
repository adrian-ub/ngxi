import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLayoutSidebarRightIcon],svg[codicon-layout-sidebar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1L1 2v12l1 1h12l1-1V2l-1-1zm0 13V2h7v12z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconLayoutSidebarRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
