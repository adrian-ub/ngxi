import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandMondayIcon],svg[tabler-brand-monday-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M9.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 9.5 7m7 0a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 16.5 7"></svg:path>`,
})
export class TablerBrandMondayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
