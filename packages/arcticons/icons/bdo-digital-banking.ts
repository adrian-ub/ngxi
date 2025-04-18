import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBdoDigitalBankingIcon],svg[arcticons-bdo-digital-banking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.595 29.413V18.587h2.436a4.736 4.736 0 0 1 4.736 4.736v1.354a4.736 4.736 0 0 1-4.736 4.736zM14.966 24a2.707 2.707 0 0 1 0 5.413H10.5V18.587h4.466a2.707 2.707 0 0 1 0 5.413m0 0H10.5"></svg:path><svg:rect width="7.172" height="10.826" x="30.328" y="18.587" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.586" ry="3.586"></svg:rect>`,
})
export class ArcticonsBdoDigitalBankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
