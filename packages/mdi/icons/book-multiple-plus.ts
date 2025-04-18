import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookMultiplePlusIcon],svg[mdi-book-multiple-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-5v5l-2-1.5L10 7V2H9zM3 6v14a2 2 0 0 0 2 2h12v-2H5V6H3zm12 4h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2z" fill="currentColor"></svg:path>`,
})
export class MdiBookMultiplePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
