import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRemoveFromQueueOutlineSharpIcon],svg[material-symbols-light-remove-from-queue-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 11.5h7v-1h-7zM9 20v-2H3V4h18v14h-6v2zm-5-3h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightRemoveFromQueueOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
