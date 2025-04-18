import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWineBarOutlineIcon],svg[material-symbols-wine-bar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-2h3v-4.1q-2.15-.35-3.575-2T6 9V3h12v6q0 2.25-1.425 3.9T13 14.9V19h3v2zm4-8q1.4 0 2.45-.85t1.4-2.15h-7.7q.35 1.3 1.4 2.15T12 13M8 8h8V5H8zm4 5"></svg:path>`,
})
export class MaterialSymbolsWineBarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
