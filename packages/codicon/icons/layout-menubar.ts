import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLayoutMenubarIcon],svg[codicon-layout-menubar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1 2l1-1h12l1 1v12l-1 1H2l-1-1zm1 0v12h12V2zm1 1h2v1H3zm3 0h2v1H6zm5 0H9v1h2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconLayoutMenubarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
