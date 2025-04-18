import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleUpRightFIcon],svg[jam-chevrons-circle-up-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11v3a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2zm3-3v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2zm-2 12C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronsCircleUpRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
