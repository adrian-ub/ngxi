import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPenSize2Icon],svg[material-symbols-pen-size-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.3 18.7q-.275-.275-.275-.7t.275-.7l12-12q.275-.3.688-.3t.712.3q.275.275.275.7t-.275.7l-12 12q-.275.275-.7.275t-.7-.275"></svg:path>`,
})
export class MaterialSymbolsPenSize2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
