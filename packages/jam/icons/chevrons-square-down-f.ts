import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareDownFIcon],svg[jam-chevrons-square-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m5.998 12.612l-2.122-2.121a1 1 0 1 0-1.414 1.414l2.829 2.828a1 1 0 0 0 1.414 0l2.828-2.828a1 1 0 0 0-1.414-1.414zm0-5L7.876 5.491a1 1 0 1 0-1.414 1.414l2.829 2.828a1 1 0 0 0 1.414 0l2.828-2.828A1 1 0 0 0 12.12 5.49z"></svg:path>`,
})
export class JamChevronsSquareDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
