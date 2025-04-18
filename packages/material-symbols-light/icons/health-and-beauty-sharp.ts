import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHealthAndBeautySharpIcon],svg[material-symbols-light-health-and-beauty-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.039 21v-1h4v-2.77h-4v-1h4v-2.768h-4v-1h4v-2.77h-4v-1h4V5.923h-4v-1h5.769V21zM5.653 21l-3.462-9.577l4.77-2.846V3h2v5.577l4.769 2.846L10.269 21z"></svg:path>`,
})
export class MaterialSymbolsLightHealthAndBeautySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
