import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareLetterVFilledIcon],svg[tabler-square-letter-v-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4.757 5.03a1 1 0 0 0-1.213.727L12 11.875l-1.03-4.118a1 1 0 1 0-1.94.486l2 8c.252 1.01 1.688 1.01 1.94 0l2-8a1 1 0 0 0-.727-1.213"></svg:path>`,
})
export class TablerSquareLetterVFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
