import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSignalCellular3Icon],svg[cil-signal-cellular-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.78 264h-.1v.1L16 456.78V496h480V16h-39.22Zm-88.1 200H54.035l66.646-66.646Zm88 0h-56v-98.646l56-56Zm88 0h-56V277.354l56-56ZM464 464H328.681V189.354L464 54.034Z"></svg:path>`,
})
export class CilSignalCellular3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
