import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRoadIcon],svg[material-symbols-light-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5h1v14zm6.5 0v-3.077h1V19zm6.5 0V5h1v14zm-6.5-5.462v-3.076h1v3.077zm0-5.461V5h1v3.077z"></svg:path>`,
})
export class MaterialSymbolsLightRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
