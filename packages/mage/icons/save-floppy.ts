import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageSaveFloppyIcon],svg[mage-save-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 9.16v7.987a4.1 4.1 0 0 1-1.204 2.901a4.1 4.1 0 0 1-2.906 1.202H6.86a4.1 4.1 0 0 1-2.906-1.202a4.1 4.1 0 0 1-1.204-2.901V6.853a4.1 4.1 0 0 1 1.204-2.901A4.1 4.1 0 0 1 6.86 2.75h8.35a3 3 0 0 1 2.25.998l3 3.415c.501.545.783 1.256.79 1.997"></svg:path><svg:path d="M7 21.22v-5.241a1.995 1.995 0 0 1 2-1.997h6a2 2 0 0 1 2 1.997v5.241M15.8 2.81v4.183a1.526 1.526 0 0 1-1.52 1.528H9.72A1.53 1.53 0 0 1 8.2 6.993V2.75m1.946 15.108h3.708"></svg:path></svg:g>`,
})
export class MageSaveFloppyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
