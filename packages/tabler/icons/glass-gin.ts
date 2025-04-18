import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGlassGinIcon],svg[tabler-glass-gin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 21h8m-4-6v6M5.5 5a6.5 2 0 1 0 13 0a6.5 2 0 1 0-13 0"></svg:path><svg:path d="M5.75 4.5C5.138 5.25 5 6.5 5 8a7 7 0 0 0 14 0c0-1.5-.094-2.75-.75-3.5"></svg:path></svg:g>`,
})
export class TablerGlassGinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
