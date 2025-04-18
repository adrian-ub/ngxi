import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDresserOutlineSharpIcon],svg[material-symbols-dresser-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v16h-2v-2H6v2Zm2-10h5V5H6Zm7-4h5V5h-5Zm0 4h5V9h-5Zm-3 5h4v-2h-4Zm-4-3v4h12v-4Zm0 4v-4v4Z"></svg:path>`,
})
export class MaterialSymbolsDresserOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
