import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPillIcon],svg[material-symbols-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.7 15.275l2.65-2.675q.8-.8 1.225-1.825T21 8.625q0-2.35-1.637-3.988T15.375 3q-1.125 0-2.15.425T11.4 4.65L8.725 7.3zM8.625 21q1.125 0 2.15-.425T12.6 19.35l2.675-2.65L7.3 8.725L4.65 11.4q-.8.8-1.225 1.825T3 15.375q0 2.35 1.638 3.987T8.625 21"></svg:path>`,
})
export class MaterialSymbolsPillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
