import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRemoveFromQueueSharpIcon],svg[material-symbols-remove-from-queue-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h8v-2H8zm0 9v-2H2V3h20v16h-6v2z"></svg:path>`,
})
export class MaterialSymbolsRemoveFromQueueSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
