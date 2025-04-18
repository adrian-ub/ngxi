import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPyramidPlusIcon],svg[tabler-pyramid-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.719 11.985L12.83 2.446a1 1 0 0 0-1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452l8.092 4.054a2 2 0 0 0 1.789 0l.149-.074M12 2v20m4-3h6m-3-3v6"></svg:path>`,
})
export class TablerPyramidPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
