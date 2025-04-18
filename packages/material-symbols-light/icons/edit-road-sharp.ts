import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditRoadSharpIcon],svg[material-symbols-light-edit-road-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11.664V5h1v5.664zM5 19V5h1v14zm5.5-10.98V5h1v3.02zm0 5.48v-3.02h1v3.02zm0 5.5v-3.02h1V19zm3.73 0v-2.21l5.96-5.934l2.19 2.204L16.44 19zm5.96-4.985l.925-.956l-.924-.943l-.95.95z"></svg:path>`,
})
export class MaterialSymbolsLightEditRoadSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
