import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkLinkIcon],svg[nrk-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.59 9.17L3.5 16.24l4.25 4.25l2.83-2.83L12 19.07l-4.24 4.24l-7.07-7.07l9.9-9.9l4.24 4.25L13.4 12l-2.8-2.83zm5.65-5.66l-2.83 2.83L12 4.93L16.24.69l7.07 7.07l-9.9 9.9l-4.24-4.25L10.6 12l2.82 2.83l7.08-7.07l-4.25-4.25z" clip-rule="evenodd"></svg:path>`,
})
export class NrkLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
