import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneLeftIcon],svg[material-symbols-light-split-scene-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.885 19V5h4.5q.69 0 1.153.463T21 6.616v10.769q0 .69-.462 1.153T19.385 19zM11.5 21v-2H4.616q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5H11.5V3h1v18z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
