import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApartmentRoundedIcon],svg[material-symbols-light-apartment-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.539 20.154q-.441 0-.74-.3t-.299-.738V8.192q0-.44.299-.739q.299-.3.74-.3H7.5v-2.96q0-.441.299-.74q.299-.3.74-.3h6.923q.44 0 .739.3q.299.299.299.74v6.96h2.962q.44 0 .739.3q.299.299.299.74v6.923q0 .44-.299.739t-.74.299H13.5v-4h-3v4zm-.039-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 12h3v-3h-3zm0-4h3v-3h-3z"></svg:path>`,
})
export class MaterialSymbolsLightApartmentRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
