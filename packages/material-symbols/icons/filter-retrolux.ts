import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterRetroluxIcon],svg[material-symbols-filter-retrolux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.05 21.95l-2.25-2.3q-.425 1.05-1.312 1.7T9.5 22q-1.475 0-2.488-1.012T6 18.5t1.013-2.488T9.5 15q.35 0 .7.05t.65.2L6 8l6-6l6 6l-5 7.5v1.55l3.45 3.45zM9.5 20q.625 0 1.063-.437T11 18.5t-.437-1.062T9.5 17t-1.062.438T8 18.5t.438 1.063T9.5 20"></svg:path>`,
})
export class MaterialSymbolsFilterRetroluxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
