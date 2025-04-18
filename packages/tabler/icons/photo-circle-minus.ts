import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoCircleMinusIcon],svg[tabler-photo-circle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 8h.01m5.465 7.035A9 9 0 0 0 12 3a9 9 0 0 0-9 9a9 9 0 0 0 9.525 8.985"></svg:path><svg:path d="m4 15l4-4c.928-.893 2.072-.893 3 0l4 4"></svg:path><svg:path d="m14 14l1-1c.928-.893 2.072-.893 3 0l2 2m-4 4h6"></svg:path></svg:g>`,
})
export class TablerPhotoCircleMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
