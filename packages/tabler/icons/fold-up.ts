import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFoldUpIcon],svg[tabler-fold-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V5L9 8m6 0l-3-3M9 17h1m4 0h1m4 0h1M4 17h1"></svg:path>`,
})
export class TablerFoldUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
