import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsSquareUpFIcon],svg[jam-chevrons-square-up-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 12.382l2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0l-2.829 2.828a1 1 0 0 0 1.415 1.414zm0-5l2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0L6.464 8.089A1 1 0 1 0 7.88 9.503L10 7.383zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path>`,
})
export class JamChevronsSquareUpFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
