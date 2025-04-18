import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTableOffIcon],svg[tabler-table-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3h12a2 2 0 0 1 2 2v12m-.585 3.413A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5c0-.55.223-1.05.583-1.412M3 10h7m4 0h7M10 3v3m0 4v11M3 3l18 18"></svg:path>`,
})
export class TablerTableOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
