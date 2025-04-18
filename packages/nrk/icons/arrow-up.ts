import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkArrowUpIcon],svg[nrk-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 4l7 4.9v2.27l-6-4.2V20l-2-1V6.97l-6 4.2V8.9z" clip-rule="evenodd"></svg:path>`,
})
export class NrkArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
