import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronUpIcon],svg[jam-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414z"></svg:path>`,
})
export class JamChevronUpIcon {
  readonly viewBox = input("-5 -7.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
