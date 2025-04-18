import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronDownLeftIcon],svg[jam-chevron-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8h7a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamChevronDownLeftIcon {
  readonly viewBox = input("-7 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
