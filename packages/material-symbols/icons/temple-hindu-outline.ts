import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTempleHinduOutlineIcon],svg[material-symbols-temple-hindu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V11h2v2h2l2.975-9.875V1h2v2H13V1h2v2l3 10h2v-2h2v11h-9v-5h-2v5zm6.7-11h6.6l-.6-2H9.3zm1.2-4h4.2l-.6-2h-3zM4 20h5v-5h6v5h5v-5h-3.5l-.6-2H8.1l-.6 2H4zm8-7.5"></svg:path>`,
})
export class MaterialSymbolsTempleHinduOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
