import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkArrowLeftIcon],svg[nrk-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4 12l4.9-7h2.272l-4.2 6H20l-1 2H6.972l4.2 6H8.9z" clip-rule="evenodd"></svg:path>`,
})
export class NrkArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
