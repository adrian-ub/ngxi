import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMelonIcon],svg[tabler-melon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 10c0 5.523-4.477 10-10 10a9.97 9.97 0 0 1-6.984-2.842l4.343-4.153a4 4 0 0 0 5.76-5.51l4.342-4.153A9.96 9.96 0 0 1 20 10"></svg:path>`,
})
export class TablerMelonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
