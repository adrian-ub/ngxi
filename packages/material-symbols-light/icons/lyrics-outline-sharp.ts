import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLyricsOutlineSharpIcon],svg[material-symbols-light-lyrics-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.577 16V4zm-1 3.577V3h13v1.867q-.292.14-.533.32q-.24.179-.467.39V4h-11v13.156L5.733 16h9.844v-3.577q.227.212.467.39q.24.18.533.32V17H6.154zm3.5-6.077h3v-1h-3zm11.54-2q-1.04 0-1.77-.728t-.731-1.77t.729-1.771t1.77-.731q.487 0 .824.137t.677.461V1.5h3v1h-2V9q0 1.042-.729 1.77q-.729.73-1.77.73m-11.54-1h6v-1h-6zm0-3h6v-1h-6z"></svg:path>`,
})
export class MaterialSymbolsLightLyricsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
