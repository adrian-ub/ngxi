import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrushIcon],svg[tabler-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 21v-4a4 4 0 1 1 4 4z"></svg:path><svg:path d="M21 3A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-10.2 12.8"></svg:path><svg:path d="M10.6 9a9 9 0 0 1 4.4 4.4"></svg:path></svg:g>`,
})
export class TablerBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
