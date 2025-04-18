import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleLetterTFilledIcon],svg[tabler-circle-letter-t-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2 5h-4a1 1 0 1 0 0 2h1v7a1 1 0 0 0 .883.993L12 17a1 1 0 0 0 1-1V9h1a1 1 0 0 0 .993-.883L15 8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerCircleLetterTFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
