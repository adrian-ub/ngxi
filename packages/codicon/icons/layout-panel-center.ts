import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLayoutPanelCenterIcon],svg[codicon-layout-panel-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1L1 2v12l1 1h12l1-1V2l-1-1zm0 13V2h2v12zm3-4V2h6v8zm7-8h2v12h-2z"></svg:path>`,
})
export class CodiconLayoutPanelCenterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
