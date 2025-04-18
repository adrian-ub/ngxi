import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLayoutPanelRightIcon],svg[codicon-layout-panel-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 2l1-1h12l1 1v12l-1 1H2l-1-1zm1 0v12h3V2zm4 0v8h8V2z"></svg:path>`,
})
export class CodiconLayoutPanelRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
