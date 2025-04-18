import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneUpOutlineIcon],svg[material-symbols-light-split-scene-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 21q-.691 0-1.153-.462T5 19.385v-4.5h1v4.5q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.423v-4.5h1v4.5q0 .69-.462 1.153T17.384 21zM3 12.5v-1h2V4.616q0-.691.463-1.153T6.616 3h10.769q.69 0 1.153.463T19 4.615V11.5h2v1zM18 20H6z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
