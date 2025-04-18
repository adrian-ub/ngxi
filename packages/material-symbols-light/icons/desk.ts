import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeskIcon],svg[material-symbols-light-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.077 17.5V7.077h17.846V17.5h-1v-2h-4.711v2h-1V8.077H4.077V17.5zm12.135-7h4.711V8.077h-4.711zm0 4h4.711v-3h-4.711z"></svg:path>`,
})
export class MaterialSymbolsLightDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
