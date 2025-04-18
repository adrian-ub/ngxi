import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareUpRightFIcon],svg[jam-chevrons-square-up-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11v3a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2zm3-3v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronsSquareUpRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
