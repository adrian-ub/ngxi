import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCleaningSharpIcon],svg[material-symbols-light-cleaning-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.866 8.116L10.98 6v-.77H9.596V4h5.616v1.462l-.885 1.769h-1.923V6.192l-1.846 1.924zM8.789 21v-6.194L12.404 8h2.385v13z"></svg:path>`,
})
export class MaterialSymbolsLightCleaningSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
