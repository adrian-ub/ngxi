import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSheetsIcon],svg[material-symbols-sheets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19h10v-7H7Zm5.75-4.25V13.5h2.75v1.25Zm0 2.75v-1.25h2.75v1.25ZM8.5 14.75V13.5h2.75v1.25Zm0 2.75v-1.25h2.75v1.25ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13h5l-5-5Z"></svg:path>`,
})
export class MaterialSymbolsSheetsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
