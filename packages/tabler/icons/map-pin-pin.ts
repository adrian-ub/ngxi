import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapPinPinIcon],svg[tabler-map-pin-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M12.783 21.326a2 2 0 0 1-2.196-.426l-4.244-4.243A8 8 0 1 1 20 11.037"></svg:path><svg:path d="M21.121 20.121a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"></svg:path></svg:g>`,
})
export class TablerMapPinPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
