import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSignLeftFilledIcon],svg[tabler-sign-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a1 1 0 0 1 .993.883L15 3v2h3a1 1 0 0 1 .993.883L19 6v5a1 1 0 0 1-.883.993L18 12h-3v8h1a1 1 0 0 1 .117 1.993L16 22h-4a1 1 0 0 1-.117-1.993L12 20h1v-8H8a1 1 0 0 1-.694-.28l-.087-.095l-2-2.5a1 1 0 0 1-.072-1.147l.072-.103l2-2.5a1 1 0 0 1 .652-.367L8 5h5V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerSignLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
