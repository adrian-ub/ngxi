import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsDownLeftIcon],svg[jam-chevrons-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h7a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0zm4-4h7a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamChevronsDownLeftIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
