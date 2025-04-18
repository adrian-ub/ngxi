import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUppercaseOutlineIcon],svg[material-symbols-light-uppercase-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.539 17.577v-7.046l-2.1 2.1l-.708-.708l3.307-3.308l3.308 3.308l-.708.708l-2.1-2.1v7.046zm-12.385 0l3.76-10.23h1.09l3.798 10.23H11.71l-1.033-2.96h-4.43l-1.02 2.96zM6.59 13.71h3.756L8.49 8.487h-.06z"></svg:path>`,
})
export class MaterialSymbolsLightUppercaseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
