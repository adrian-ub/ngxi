import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularAddIcon],svg[material-symbols-signal-cellular-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22v-3h-3v-2h3v-3h2v3h3v2h-3v3zM2 22L21.975 2.025V12.65q-.675-.4-1.437-.588T19 11.875q-2.55 0-4.337 1.788T12.875 18q0 1.15.375 2.138T14.375 22z"></svg:path>`,
})
export class MaterialSymbolsSignalCellularAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
