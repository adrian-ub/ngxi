import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapPinExclamationIcon],svg[tabler-map-pin-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="m15.005 19.31l-1.591 1.59a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 13.592-4.638M19 16v3m0 3v.01"></svg:path></svg:g>`,
})
export class TablerMapPinExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
