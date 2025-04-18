import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronUpRightIcon],svg[jam-chevron-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H1a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0z"></svg:path>`,
})
export class JamChevronUpRightIcon {
  readonly viewBox = input("-7 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
