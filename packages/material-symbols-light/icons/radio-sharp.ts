import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRadioSharpIcon],svg[material-symbols-light-radio-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V7.227l11.9-4.842l.342.88L6.031 7H21v14zm4.846-2.616q.877 0 1.496-.619q.62-.619.62-1.496t-.62-1.496t-1.496-.62t-1.496.62t-.62 1.496t.62 1.497t1.496.619M4 11.537h12.5V9.693h1v1.847H20V8H4z"></svg:path>`,
})
export class MaterialSymbolsLightRadioSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
