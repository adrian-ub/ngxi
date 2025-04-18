import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHandPointingUpIcon],svg[mdi-hand-pointing-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3v10l3.2-1.69l.22-.03c.29 0 .55.12.74.32l.74.77l-4.9 4.2c-.26.27-.61.43-1 .43H6.5c-.77 0-1.5-.7-1.5-1.5v-4.36c0-.61.35-1.14.85-1.34l4.94-2.2L12 7.47V3a1 1 0 0 1 1-1a1 1 0 0 1 1 1M5 19h8v3H5z"></svg:path>`,
})
export class MdiHandPointingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
