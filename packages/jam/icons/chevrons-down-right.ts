import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsDownRightIcon],svg[jam-chevrons-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8V1a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2zm4 4V5a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2z"></svg:path>`,
})
export class JamChevronsDownRightIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
