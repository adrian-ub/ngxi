import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloor3Icon],svg[mdi-floor-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3l10 9h-3v8H5v-8H2l10-9zm3 8.5V10a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2v-1.5c0-.83-.67-1.5-1.5-1.5c.83 0 1.5-.67 1.5-1.5z" fill="currentColor"></svg:path>`,
})
export class MdiFloor3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
