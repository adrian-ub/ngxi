import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareLetterUFilledIcon],svg[tabler-square-letter-u-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 5a1 1 0 0 0-1 1v6a1 1 0 0 1-2 0V8a1 1 0 0 0-2 0v6a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerSquareLetterUFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
