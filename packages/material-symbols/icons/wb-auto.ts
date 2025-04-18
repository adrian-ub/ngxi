import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWbAutoIcon],svg[material-symbols-wb-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.825 15h1.2l.65-1.8h2.8l.65 1.8h1.2l-2.6-7h-1.3zm2.2-2.8l1-2.9h.1l1 2.9zm1.05 6.8q-2.925 0-4.962-2.037T1.075 12t2.038-4.962T8.075 5q1.875 0 3.463.925t2.537 2.525l-.1-.45h1.2l1.2 5.1h.05l1.45-5.1h1.1l1.45 5.1h.1l1.2-5.1h1.2l-1.85 7h-1.15l-1.5-5.25h-.05L16.925 15h-1.15l-.7-2.9q0 2.875-2.05 4.888T8.075 19"></svg:path>`,
})
export class MaterialSymbolsWbAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
