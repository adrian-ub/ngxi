import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleUpFIcon],svg[jam-chevrons-circle-up-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 12.382l2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0l-2.829 2.828a1 1 0 0 0 1.415 1.414zm0-5l2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0L6.464 8.089A1 1 0 1 0 7.88 9.503L10 7.383zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamChevronsCircleUpFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
