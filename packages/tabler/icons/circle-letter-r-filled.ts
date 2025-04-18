import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleLetterRFilledIcon],svg[tabler-circle-letter-r-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 5h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-2.332l2.2 2.932a1 1 0 0 0 1.4.2l.096-.081A1 1 0 0 0 14.8 15.4l-1.903-2.538l.115-.037A3.001 3.001 0 0 0 12 7m0 2a1 1 0 0 1 0 2h-1V9z"></svg:path>`,
})
export class TablerCircleLetterRFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
