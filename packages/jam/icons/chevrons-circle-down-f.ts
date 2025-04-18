import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsCircleDownFIcon],svg[jam-chevrons-circle-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m.009-7.377l-2.122-2.12a1 1 0 0 0-1.414 1.413l2.828 2.829a1 1 0 0 0 1.415 0l2.828-2.829a1 1 0 1 0-1.414-1.414zm0-5l-2.122-2.12a1 1 0 0 0-1.414 1.413l2.828 2.829a1 1 0 0 0 1.415 0l2.828-2.829a1 1 0 1 0-1.414-1.414z"></svg:path>`,
})
export class JamChevronsCircleDownFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
