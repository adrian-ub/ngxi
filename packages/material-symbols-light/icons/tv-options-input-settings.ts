import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvOptionsInputSettingsIcon],svg[material-symbols-light-tv-options-input-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.672 0-1.144-.472T3 17.385V6.615q0-.67.472-1.143Q3.944 5 4.616 5h14.769q.67 0 1.143.472q.472.472.472 1.144v10.769q0 .67-.472 1.143q-.472.472-1.143.472zm6.884-3.115h1l.108-.885q.473-.106.889-.32t.75-.588l.853.354l.539-.834l-.708-.616q.146-.498.146-.996t-.146-.996l.708-.615l-.539-.835l-.854.354q-.332-.374-.749-.588q-.416-.214-.89-.32l-.107-.884h-1L11.392 9q-.473.106-.889.32t-.75.588L8.9 9.554l-.538.834l.707.616q-.146.498-.146.996t.146.996l-.708.615l.539.835l.854-.354q.333.374.749.588t.89.32zm.5-1.731q-.902 0-1.528-.626T9.846 12t.626-1.528T12 9.846t1.528.626t.626 1.528t-.626 1.528t-1.528.626"></svg:path>`,
})
export class MaterialSymbolsLightTvOptionsInputSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
