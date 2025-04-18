import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPersonBookSharpIcon],svg[material-symbols-person-book-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16q-1.725 0-3.225.525T6 18v2h12v-2q-1.275-.95-2.775-1.475T12 16m-8 6V2h16v20zm8-8q1.45 0 2.475-1.025T15.5 10.5t-1.025-2.475T12 7T9.525 8.025T8.5 10.5t1.025 2.475T12 14"></svg:path>`,
})
export class MaterialSymbolsPersonBookSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
