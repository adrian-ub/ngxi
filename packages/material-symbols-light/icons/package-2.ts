import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPackage2Icon],svg[material-symbols-light-package-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20.86v-8.573L4 7.95v7.66q0 .434.215.807q.214.373.593.59zm1 0l6.692-3.852q.38-.217.594-.59q.214-.374.214-.808V7.95l-7.5 4.337zm3.667-11.846l3.277-1.88l-6.636-3.82q-.38-.218-.808-.218t-.808.218L8.775 4.708zM12 11.427l3.167-1.835L7.742 5.3L4.57 7.121z"></svg:path>`,
})
export class MaterialSymbolsLightPackage2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
