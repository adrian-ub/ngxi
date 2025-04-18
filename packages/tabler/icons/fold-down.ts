import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFoldDownIcon],svg[tabler-fold-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11v8l3-3m-6 0l3 3M9 7h1m4 0h1m4 0h1M4 7h1"></svg:path>`,
})
export class TablerFoldDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
