import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneDownIcon],svg[material-symbols-light-split-scene-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9.116v-4.5q0-.691.463-1.153T6.616 3h10.769q.69 0 1.153.463T19 4.616v4.5zM6.616 21q-.691 0-1.153-.462T5 19.385V12.5H3v-1h18v1h-2v6.885q0 .69-.462 1.152T17.384 21z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
