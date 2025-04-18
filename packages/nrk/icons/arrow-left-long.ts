import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkArrowLeftLongIcon],svg[nrk-arrow-left-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4 12l4.9-7h2.272l-4.2 6H36l-1 2H6.972l4.2 6H8.9z" clip-rule="evenodd"></svg:path>`,
})
export class NrkArrowLeftLongIcon {
  readonly viewBox = input("0 0 40 24")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
