import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTempleHinduIcon],svg[material-symbols-temple-hindu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.8 7l1.175-3.875V1h2v2H13V1h2v2l1.2 4zM2 22V11h2v2h16v-2h2v11h-9v-5h-2v5zm4.6-11l.6-2h9.6l.6 2z"></svg:path>`,
})
export class MaterialSymbolsTempleHinduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
