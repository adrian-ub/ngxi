import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBlindsOutlineIcon],svg[material-symbols-blinds-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-2h2V4h16v14h2v2ZM6 9h12V6H6Zm0 9h12v-7h-5v2.275q.45.275.725.725q.275.45.275 1q0 .825-.587 1.413Q12.825 17 12 17q-.825 0-1.412-.587Q10 15.825 10 15q0-.55.275-1q.275-.45.725-.725V11H6ZM6 6h12H6Z"></svg:path>`,
})
export class MaterialSymbolsBlindsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
