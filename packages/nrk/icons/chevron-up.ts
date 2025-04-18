import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkChevronUpIcon],svg[nrk-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 13.12l8-5.6l8 5.6V15l-8-5.6L4 15z"></svg:path>`,
})
export class NrkChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
