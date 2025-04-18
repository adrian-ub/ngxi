import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFaxOutlineSharpIcon],svg[material-symbols-light-fax-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.885 20.5v-12H7.5v1h.808V4.846h9V9.5h3.23v10H7.5v1zm1-1H6.5v-10H3.885zm5.423-10h7V5.846h-7zm-1.808 9h12.039v-8H7.5zM8.808 17h4v-5h-4zM7.5 18.5v-8zm6.308-4.5h2v-2h-2zm2.808 0h2v-2h-2zm-2.808 3h2v-2h-2zm2.807 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsLightFaxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
