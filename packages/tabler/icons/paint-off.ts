import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPaintOffIcon],svg[tabler-paint-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 3h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4M9 9H7a2 2 0 0 1-2-2V5"></svg:path><svg:path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1-5 5m-4 0h-1v2m-2 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM3 3l18 18"></svg:path></svg:g>`,
})
export class TablerPaintOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
