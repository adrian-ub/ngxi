import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLdaOutlineIcon],svg[material-symbols-lda-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-3.425L5 16.05V11h6V8h-1q-.825 0-1.412-.587T8 6V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2q0 .825-.587 1.413T14 8h-1v3h6v5.05l-6 2.525V22zM10 6h4V4h-4zm1 10.4V13H7v1.725zm2 0l4-1.675V13h-4zM10 6V4z"></svg:path>`,
})
export class MaterialSymbolsLdaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
