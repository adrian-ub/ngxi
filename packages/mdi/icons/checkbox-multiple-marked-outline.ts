import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckboxMultipleMarkedOutlineIcon],svg[mdi-checkbox-multiple-marked-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16v-6h2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h8v2H8v12zm-9.09-8.92L14 10.17l6.59-6.59L22 5l-8 8l-4.5-4.5zM16 20v2H4a2 2 0 0 1-2-2V7h2v13z"></svg:path>`,
})
export class MdiCheckboxMultipleMarkedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
