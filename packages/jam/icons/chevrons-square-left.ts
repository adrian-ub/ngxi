import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareLeftIcon],svg[jam-chevrons-square-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm2.828 8l2.122 2.121a1 1 0 0 1-1.414 1.415l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829A1 1 0 1 1 8.95 7.88zm4.99 0l2.121 2.121a1 1 0 0 1-1.414 1.415l-2.828-2.829a1 1 0 0 1 0-1.414l2.828-2.829A1 1 0 0 1 13.94 7.88z"></svg:path>`,
})
export class JamChevronsSquareLeftIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
