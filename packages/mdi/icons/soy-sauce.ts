import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSoySauceIcon],svg[mdi-soy-sauce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.9 7.5c0-.7.2-1.2.3-1.5h.6l.9-2.5h.8V2h-9v1.5h.8L9.2 6h.6q.3.45.3 1.5c0 1.3-4.1 6.2-4.1 10.1v2c0 1.4 2.7 2.3 6 2.3s6-.9 6-2.3v-2c0-3.9-4.1-8.8-4.1-10.1M12 15a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiSoySauceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
