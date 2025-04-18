import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoCircleIcon],svg[tabler-photo-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 8h.01M4 15l4-4c.928-.893 2.072-.893 3 0l5 5"></svg:path><svg:path d="m14 14l1-1c.928-.893 2.072-.893 3 0l2 2"></svg:path><svg:path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9"></svg:path></svg:g>`,
})
export class TablerPhotoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
