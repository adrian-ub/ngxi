import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBellCodeIcon],svg[tabler-bell-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2m-9 4v1a3 3 0 0 0 2.498 2.958M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerBellCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
