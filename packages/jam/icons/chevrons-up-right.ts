import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsUpRightIcon],svg[jam-chevrons-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2H5a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0zM8 6H1a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0z"></svg:path>`,
})
export class JamChevronsUpRightIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
