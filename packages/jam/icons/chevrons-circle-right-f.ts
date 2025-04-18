import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleRightFIcon],svg[jam-chevrons-circle-right-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m3.175-9.976l-2.122 2.121a1 1 0 0 0 1.414 1.414l2.829-2.828a1 1 0 0 0 0-1.414l-2.829-2.829a1 1 0 1 0-1.414 1.415zm-4.99 0l-2.121 2.121a1 1 0 0 0 1.414 1.414l2.828-2.828a1 1 0 0 0 0-1.414L7.478 6.488a1 1 0 0 0-1.414 1.415z"></svg:path>`,
})
export class JamChevronsCircleRightFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
