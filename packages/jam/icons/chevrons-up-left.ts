import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsUpLeftIcon],svg[jam-chevrons-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2zm4 4v7a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2z"></svg:path>`,
})
export class JamChevronsUpLeftIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
