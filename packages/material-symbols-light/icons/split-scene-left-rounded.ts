import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneLeftRoundedIcon],svg[material-symbols-light-split-scene-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.654 19q-.31 0-.54-.23t-.23-.54V5.77q0-.31.23-.54t.54-.23h3.73q.691 0 1.153.462T21 6.615v10.77q0 .69-.463 1.152T19.385 19zM12 21q-.213 0-.357-.143T11.5 20.5V19H4.616q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5H11.5V3.5q0-.213.143-.357T12 3t.357.143t.143.357v17q0 .214-.143.357T12 21"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
