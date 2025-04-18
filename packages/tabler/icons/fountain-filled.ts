import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFountainFilledIcon],svg[tabler-fountain-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a4 4 0 0 1 4 4a1 1 0 0 1-1.993.117L17 6a2 2 0 0 0-3.995-.15L13 6v9h1v-4a3 3 0 0 1 6 0a1 1 0 0 1-1.993.117L18 11a1 1 0 0 0-1.993-.117L16 11v4h5a1 1 0 0 1 .993.883L22 16v2a4 4 0 0 1-3.8 3.995L18 22H6a4 4 0 0 1-3.995-3.8L2 18v-2a1 1 0 0 1 .883-.993L3 15h5v-4a1 1 0 0 0-1.993-.117L6 11a1 1 0 0 1-2 0a3 3 0 0 1 5.995-.176L10 11v4h1V6a2 2 0 1 0-4 0a1 1 0 1 1-2 0a4 4 0 0 1 7.001-2.645A3.98 3.98 0 0 1 15 2"></svg:path>`,
})
export class TablerFountainFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
