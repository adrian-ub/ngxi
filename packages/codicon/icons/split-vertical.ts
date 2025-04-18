import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSplitVerticalIcon],svg[codicon-split-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1H3L2 2v11l1 1h11l1-1V2zm0 12H3V8h11zm0-6H3V2h11z"></svg:path>`,
})
export class CodiconSplitVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
