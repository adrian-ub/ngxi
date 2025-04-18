import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLayoutPanelOffIcon],svg[codicon-layout-panel-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1L1 2v12l1 1h12l1-1V2l-1-1zm0 9V2h12v8zm0 1h12v3H2z"></svg:path>`,
})
export class CodiconLayoutPanelOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
