import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareLetterJFilledIcon],svg[tabler-square-letter-j-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 5h-4a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 10 9h3v5a1 1 0 0 1-1.993.117L11 14a1 1 0 0 0-2 0a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerSquareLetterJFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
