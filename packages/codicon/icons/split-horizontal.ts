import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSplitHorizontalIcon],svg[codicon-split-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1H3L2 2v11l1 1h11l1-1V2zM8 13H3V2h5zm6 0H9V2h5z"></svg:path>`,
})
export class CodiconSplitHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
