import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGastroenterologyIcon],svg[material-symbols-gastroenterology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22v-6q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.288-.712T10 9q-.825 0-1.412-.587T8 7V2h6v2q2.925 0 4.963 2.038T21 11v1q0 2.925-2.037 4.963T14 19h-4q-.425 0-.712.288T9 20v2z"></svg:path>`,
})
export class MaterialSymbolsGastroenterologyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
