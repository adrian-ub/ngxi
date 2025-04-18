import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapExclamationIcon],svg[tabler-map-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 20l-6-3l-6 3V7l6-3l6 3l6-3v8.5M9 4v13m6-10v13m4-4v3m0 3v.01"></svg:path>`,
})
export class TablerMapExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
