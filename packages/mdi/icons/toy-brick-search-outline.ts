import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickSearchOutlineIcon],svg[mdi-toy-brick-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1h-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3v14h8.81a6.6 6.6 0 0 1-1.31-2H5V8h14v1.5a6.6 6.6 0 0 1 2 1.31V6m-.69 11.9a4.5 4.5 0 1 0-1.43 1.42L22 22.39L23.39 21m-6.89-3a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class MdiToyBrickSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
