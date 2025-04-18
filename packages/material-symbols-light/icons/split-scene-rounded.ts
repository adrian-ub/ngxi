import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneRoundedIcon],svg[material-symbols-light-split-scene-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h3.731q.31 0 .54.23t.23.54v12.46q0 .31-.23.54t-.54.23zM12 21q-.213 0-.357-.143T11.5 20.5v-17q0-.213.143-.357T12 3t.357.143t.143.357V5h6.885q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19H12.5v1.5q0 .214-.143.357T12 21"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
