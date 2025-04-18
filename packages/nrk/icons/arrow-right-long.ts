import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkArrowRightLongIcon],svg[nrk-arrow-right-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m36 12l-4.9-7h-2.272l4.2 6H4l1 2h28.028l-4.2 6H31.1z" clip-rule="evenodd"></svg:path>`,
})
export class NrkArrowRightLongIcon {
  readonly viewBox = input("0 0 40 24")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
