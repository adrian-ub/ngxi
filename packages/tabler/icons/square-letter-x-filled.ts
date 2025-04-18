import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareLetterXFilledIcon],svg[tabler-square-letter-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4.553 5.106a1 1 0 0 0-1.341.447L12 9.763l-1.106-2.21a1 1 0 0 0-1.234-.494l-.107.047a1 1 0 0 0-.447 1.341L10.88 12l-1.775 3.553a1 1 0 0 0 .345 1.283l.102.058a1 1 0 0 0 1.341-.447L12 14.236l1.106 2.211a1 1 0 0 0 1.234.494l.107-.047a1 1 0 0 0 .447-1.341L13.118 12l1.776-3.553a1 1 0 0 0-.345-1.283z"></svg:path>`,
})
export class TablerSquareLetterXFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
