import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddAdIcon],svg[material-symbols-light-add-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.192 19.385v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3.423 20q-.69 0-1.153-.462t-.462-1.153V5.615q0-.69.462-1.152T3.423 4h12.77q.69 0 1.152.463t.463 1.153V10h-1V7.385h-14v11q0 .269.173.442t.442.173h12.385v1z"></svg:path>`,
})
export class MaterialSymbolsLightAddAdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
