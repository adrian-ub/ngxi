import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUserCodeIcon],svg[tabler-user-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5m6.5 6l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerUserCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
