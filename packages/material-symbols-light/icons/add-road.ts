import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddRoadIcon],svg[material-symbols-light-add-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 22.73v-3h-3v-1h3v-3h1v3h3v1h-3v3zm0-9.768V4.5h1v8.462zm-12 6.769V4.5h1v15.23zm6-12V4.5h1v3.23zm0 6V10.5h1v3.23zm0 6V16.5h1v3.23z"></svg:path>`,
})
export class MaterialSymbolsLightAddRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
