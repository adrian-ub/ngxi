import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareLetterAFilledIcon],svg[tabler-square-letter-a-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5a3 3 0 0 0-3 3v6a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 .883.993L14 17a1 1 0 0 0 1-1v-6a3 3 0 0 0-3-3m0 2a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 .883-.993z"></svg:path>`,
})
export class TablerSquareLetterAFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
