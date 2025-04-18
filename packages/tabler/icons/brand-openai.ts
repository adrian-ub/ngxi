import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandOpenaiIcon],svg[tabler-brand-openai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.217 19.384A3.501 3.501 0 0 0 18 18.167V13l-6-3.35"></svg:path><svg:path d="M5.214 15.014A3.501 3.501 0 0 0 9.66 20.28L14 17.746V10.8"></svg:path><svg:path d="M6 7.63c-1.391-.236-2.787.395-3.534 1.689a3.474 3.474 0 0 0 1.271 4.745L8 16.578l6-3.348"></svg:path><svg:path d="M12.783 4.616A3.501 3.501 0 0 0 6 5.833V10.9l6 3.45"></svg:path><svg:path d="M18.786 8.986A3.501 3.501 0 0 0 14.34 3.72L10 6.254V13.2"></svg:path><svg:path d="M18 16.302c1.391.236 2.787-.395 3.534-1.689a3.474 3.474 0 0 0-1.271-4.745l-4.308-2.514L10 10.774"></svg:path></svg:g>`,
})
export class TablerBrandOpenaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
