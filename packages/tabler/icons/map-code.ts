import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapCodeIcon],svg[tabler-map-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 18l-2-1l-6 3V7l6-3l6 3l6-3v9M9 4v13m6-10v6.5m5 7.5l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerMapCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
