import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsComputerCancelOutlineSharpIcon],svg[material-symbols-computer-cancel-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.4 14.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 7.9l-1.4-1.4L12 9.1L9.4 6.5L8 7.9l2.6 2.6L8 13.1zM1 21v-2h22v2zm1-3V3h20v15zm2-2h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsComputerCancelOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
