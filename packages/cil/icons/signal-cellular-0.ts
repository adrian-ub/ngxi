import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSignalCellular0Icon],svg[cil-signal-cellular-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 456.78V496h480V16h-39.22ZM464 464H54.035L464 54.034Z"></svg:path>`,
})
export class CilSignalCellular0Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
