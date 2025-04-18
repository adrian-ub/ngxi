import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLayoutSidebarLeftOffIcon],svg[codicon-layout-sidebar-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1L1 2v12l1 1h12l1-1V2l-1-1zm0 13V2h4v12zm5 0V2h7v12z"></svg:path>`,
})
export class CodiconLayoutSidebarLeftOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
