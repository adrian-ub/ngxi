import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMedicalServicesOutlineSharpIcon],svg[material-symbols-medical-services-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V6h6V2h8v4h6v16zm2-2h16V8H4zm6-14h4V4h-4zM4 20V8zm7-5v3h2v-3h3v-2h-3v-3h-2v3H8v2z"></svg:path>`,
})
export class MaterialSymbolsMedicalServicesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
