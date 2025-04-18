import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFile3dIcon],svg[tabler-file-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2m-5-7.5l4-1.5"></svg:path><svg:path d="m8 11.846l4 1.654V18l4-1.846v-4.308L12 10zM8 12v4.2l4 1.8"></svg:path></svg:g>`,
})
export class TablerFile3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
