import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBreenoShortcutsIcon],svg[arcticons-breeno-shortcuts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.843 19.172c0 7.55-6.12 13.671-13.671 13.671S5.5 26.723 5.5 19.172S11.621 5.5 19.172 5.5s13.671 6.121 13.671 13.672"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 28.828c0 7.551-6.121 13.672-13.672 13.672s-13.671-6.121-13.671-13.672s6.12-13.671 13.671-13.671S42.5 21.277 42.5 28.828"></svg:path>`,
})
export class ArcticonsBreenoShortcutsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
