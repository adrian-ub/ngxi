import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneDownRoundedIcon],svg[material-symbols-light-split-scene-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.616q0-.691.463-1.153T6.616 3h10.769q.69 0 1.153.463T19 4.615v3.731q0 .31-.23.54t-.54.23H5.77q-.31 0-.54-.23T5 8.346zM3 12q0-.213.143-.357T3.5 11.5h17q.214 0 .357.143T21 12t-.143.357t-.357.143H19v6.885q0 .69-.462 1.152T17.384 21H6.616q-.691 0-1.153-.462T5 19.385V12.5H3.5q-.213 0-.357-.143T3 12"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
