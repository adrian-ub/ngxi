import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInHomeModeIcon],svg[material-symbols-light-in-home-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.637 21l-3.533-3.538l.708-.714l2.825 2.825l5.675-5.65l.688.714zM5 19V9.452l-2.396 1.779l-.598-.787L12 3l10.02 7.439l-.604.792l-1.033-.754l-5.747 5.733l-2.825-2.844l-4.12 4.146L9.172 19z"></svg:path>`,
})
export class MaterialSymbolsLightInHomeModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
