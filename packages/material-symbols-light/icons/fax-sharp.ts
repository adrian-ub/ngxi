import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFaxSharpIcon],svg[material-symbols-light-fax-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.539 19.5v-10h.769V4.846h9V9.5h3.23v10zm-4.654 1h3.884v-12H2.885zm6.423-11h7V5.846h-7zm-.27 7.5h4v-5h-4zm5-3h2v-2h-2zm2.808 0h2v-2h-2zm-2.808 3h2v-2h-2zm2.808 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsLightFaxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
