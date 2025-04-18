import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFallIcon],svg[tabler-fall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 21l1-5l-1-4l-3-4h4l3-3M6 16l-1-4l3-4M5 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m8.5 7H16l4 2"></svg:path>`,
})
export class TablerFallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
