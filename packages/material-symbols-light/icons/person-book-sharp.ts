import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPersonBookSharpIcon],svg[material-symbols-light-person-book-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.385q-1.725 0-3.234.524q-1.51.525-2.766 1.475V20h12v-1.616q-1.275-.95-2.775-1.475T12 16.385M5 21V3h14v18zm7-6.923q1.258 0 2.129-.871T15 11.077t-.871-2.129T12 8.077t-2.129.871T9 11.077t.871 2.129t2.129.871"></svg:path>`,
})
export class MaterialSymbolsLightPersonBookSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
