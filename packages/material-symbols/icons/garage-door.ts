import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGarageDoorIcon],svg[material-symbols-garage-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14v-2h8v2zm0 3v-2h8v2zm0 3v-2h8v2zm4-17l10 9h-3v8h-2v-9H7v9H5v-8H2z"></svg:path>`,
})
export class MaterialSymbolsGarageDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
