import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasDiagramIcon],svg[pajamas-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 5.5v-3h5v3zM4 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-.103l1.535 2H14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.541L9.007 7H6.993L5.46 9H6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.568l1.535-2H5a1 1 0 0 1-1-1zm-1.5 8.5v3h3v-3zm8 3v-3h3v3z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasDiagramIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
