import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleLetterCFilledIcon],svg[tabler-circle-letter-c-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 5a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0a1 1 0 0 0-1.993-.117L13 14a1 1 0 0 1-2 0v-4a1 1 0 0 1 1.993-.117L13 10a1 1 0 0 0 2 0a3 3 0 0 0-3-3"></svg:path>`,
})
export class TablerCircleLetterCFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
