import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookMultipleOutlineIcon],svg[mdi-book-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2h-3v6l-2.5-2.25L11 10V4H9v12h10M3 20a2 2 0 0 0 2 2h12v-2H5V6H3Z"></svg:path>`,
})
export class MdiBookMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
