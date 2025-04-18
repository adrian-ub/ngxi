import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSpacesIcon],svg[tabler-spaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.045 9.777a6 6 0 1 0 5.951.023"></svg:path><svg:path d="M11.997 20.196a6 6 0 1 0-2.948-5.97"></svg:path><svg:path d="M17.95 9.785Q18 9.399 18 9a6 6 0 1 0-3.056 5.23"></svg:path></svg:g>`,
})
export class TablerSpacesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
