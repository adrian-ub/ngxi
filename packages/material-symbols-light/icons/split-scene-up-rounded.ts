import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneUpRoundedIcon],svg[material-symbols-light-split-scene-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 21q-.691 0-1.153-.462T5 19.385v-3.731q0-.31.23-.54t.54-.23h12.46q.31 0 .54.23t.23.54v3.73q0 .691-.462 1.153T17.384 21zM3.5 12.5q-.213 0-.357-.143T3 12t.143-.357t.357-.143H5V4.616q0-.691.463-1.153T6.616 3h10.769q.69 0 1.153.463T19 4.615V11.5h1.5q.214 0 .357.143T21 12t-.143.357t-.357.143z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
