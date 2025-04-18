import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsServiceToolboxSharpIcon],svg[material-symbols-service-toolbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-6h5v1h2v-1h6v1h2v-1h5v6zm.425-8l2.6-6H7V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v1h1.975l2.6 6H17v-1h-2v1H9v-1H7v1zM9 6h6V5H9z"></svg:path>`,
})
export class MaterialSymbolsServiceToolboxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
