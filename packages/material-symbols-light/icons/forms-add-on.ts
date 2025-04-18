import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormsAddOnIcon],svg[material-symbols-light-forms-add-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 20.475v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3.5 17.5v-1h1v1zm3 0v-1h5.017q-.017.265-.004.505q.012.24.03.495zm-3-4v-1h1v1zm3 0v-1h7.304q-.287.208-.538.458q-.25.25-.485.542zm-3-4v-1h1v1zm3 0v-1h12v1zm-3-4v-1h1v1zm3 0v-1h12v1z"></svg:path>`,
})
export class MaterialSymbolsLightFormsAddOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
