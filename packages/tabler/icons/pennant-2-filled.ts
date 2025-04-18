import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPennant2FilledIcon],svg[tabler-pennant-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a1 1 0 0 1 .993.883L15 3v17h1a1 1 0 0 1 .117 1.993L16 22h-4a1 1 0 0 1-.117-1.993L12 20h1v-7.351L4.594 8.914c-.752-.335-.79-1.365-.113-1.77l.113-.058L13 3.35V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerPennant2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
