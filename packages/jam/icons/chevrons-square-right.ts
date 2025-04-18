import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareRightIcon],svg[jam-chevrons-square-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8.818 8l-2.121-2.121a1 1 0 0 1 1.414-1.415l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.415zm-4.99 0l-2.12-2.121A1 1 0 0 1 7.12 6.464l2.83 2.829a1 1 0 0 1 0 1.414l-2.83 2.829a1 1 0 1 1-1.414-1.415z"></svg:path>`,
})
export class JamChevronsSquareRightIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
