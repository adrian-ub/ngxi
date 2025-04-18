import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGiteRoundedIcon],svg[material-symbols-gite-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19q-.825 0-1.412-.587T2 17v-6.175q0-.4.15-.762t.425-.638l2.85-2.85q.275-.275.638-.425T6.825 6H7V5q0-.425.288-.712T8 4t.713.288T9 5v1h8.175q.4 0 .763.15t.637.425l2.85 2.85q.275.275.425.638t.15.762V17q0 .825-.587 1.413T20 19zm12-2h4v-6.175l-2-2l-2 2zm-2 0v-5H4v5z"></svg:path>`,
})
export class MaterialSymbolsGiteRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
