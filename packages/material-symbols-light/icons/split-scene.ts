import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneIcon],svg[material-symbols-light-split-scene-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h4.5v14zm6.884 2V3h1v2h6.885q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19H12.5v2z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
