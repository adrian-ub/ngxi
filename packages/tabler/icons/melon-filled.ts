import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMelonFilledIcon],svg[tabler-melon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.77 2.62a1 1 0 0 1 1.436.055A10.96 10.96 0 0 1 21 10.001C21 16.075 16.075 21 10.001 21a10.97 10.97 0 0 1-7.684-3.127a1 1 0 0 1 .008-1.438l4.343-4.153a1 1 0 0 1 1.352-.027a3 3 0 0 0 4.32-4.133a1 1 0 0 1 .088-1.35z"></svg:path>`,
})
export class TablerMelonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
