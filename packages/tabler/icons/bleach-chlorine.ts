import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBleachChlorineIcon],svg[tabler-bleach-chlorine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19"></svg:path><svg:path d="M11 12h-1a2 2 0 1 0 0 4h1m3-4v4h2"></svg:path></svg:g>`,
})
export class TablerBleachChlorineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
