import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKebabDiningIcon],svg[material-symbols-kebab-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 23v-4H5.5q-1.05 0-1.775-.725T3 16.5t.725-1.775T5.5 14h.75v-1H3V8h3.25V7H5.5q-1.05 0-1.775-.725T3 4.5t.725-1.775T5.5 2h.75V1h1.5v1h.75q1.05 0 1.775.725T11 4.5t-.725 1.775T8.5 7h-.75v1H11v5H7.75v1h.75q1.05 0 1.775.725T11 16.5t-.725 1.775T8.5 19h-.75v4zm10 0v-4h-.75q-1.05 0-1.775-.725T13 16.5t.725-1.775T15.5 14h.75v-1H13V8h3.25V7h-.75q-1.05 0-1.775-.725T13 4.5t.725-1.775T15.5 2h.75V1h1.5v1h.75q1.05 0 1.775.725T21 4.5t-.725 1.775T18.5 7h-.75v1H21v5h-3.25v1h.75q1.05 0 1.775.725T21 16.5t-.725 1.775T18.5 19h-.75v4z"></svg:path>`,
})
export class MaterialSymbolsKebabDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
