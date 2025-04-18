import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsHelpBookIcon],svg[grommet-icons-help-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M11.937 12.136v-.864c0-.864 0-1.296.797-1.728c.798-.432 1.595-.864 1.595-2.16c0-.865-.797-2.16-2.392-2.16S9.546 6.316 9.546 7.816"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-width="2" d="M11.938 13v1.728"></svg:path><svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5.5 18a2.5 2.5 0 1 0 0 5H22M3 20.5v-17A2.5 2.5 0 0 1 5.5 1H21v17.007H5.492M20.5 18a2.5 2.5 0 1 0 0 5"></svg:path>`,
})
export class GrommetIconsHelpBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
