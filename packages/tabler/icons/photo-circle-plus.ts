import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoCirclePlusIcon],svg[tabler-photo-circle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 8h.01m5.954 4.806A9 9 0 0 0 12 3a9 9 0 0 0-9 9a9 9 0 0 0 9.397 8.991"></svg:path><svg:path d="m4 15l4-4c.928-.893 2.072-.893 3 0l4 4"></svg:path><svg:path d="m14 14l1-1c.928-.893 2.072-.893 3 0m-2 6.33h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerPhotoCirclePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
