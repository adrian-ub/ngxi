import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEventListSharpIcon],svg[material-symbols-light-event-list-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.616 20v-6.384H21V20zM3 17.308v-1h8.23v1zm11.616-6.924V4H21v6.385zM3 7.692v-1h8.23v1z"></svg:path>`,
})
export class MaterialSymbolsLightEventListSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
