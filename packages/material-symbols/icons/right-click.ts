import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRightClickIcon],svg[material-symbols-right-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.3 18l.625-2.1q1.35-.325 2.213-1.4T16 12q0-1.65-1.175-2.825T12 8q-1.425 0-2.5.863t-1.4 2.212L6 11.7q.125-2.4 1.85-4.05T12 6q2.5 0 4.25 1.75T18 12q0 2.425-1.65 4.15T12.3 18m-8.825 4.5L1.5 20.525l4.275-4.275L2 15l10-3l-3 10l-1.25-3.775z"></svg:path>`,
})
export class MaterialSymbolsRightClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
