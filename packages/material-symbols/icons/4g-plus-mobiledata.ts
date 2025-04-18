import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols4gPlusMobiledataIcon],svg[material-symbols-4g-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15v-2h-2v-2h2V9h2v2h2v2h-2v2zM5 17v-3H1V7h2v5h2V7h2v5h1v2H7v3zm12-6v4q0 .825-.587 1.413T15 17h-4q-.825 0-1.412-.587T9 15V9q0-.825.588-1.412T11 7h4q.825 0 1.413.588T17 9h-6v6h4v-2h-2v-2z"></svg:path>`,
})
export class MaterialSymbols4gPlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
