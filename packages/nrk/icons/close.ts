import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCloseIcon],svg[nrk-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 10.586l6.293-6.293l1.414 1.414L13.414 12l6.293 6.293l-1.414 1.414L12 13.414l-6.293 6.293l-1.414-1.414L10.586 12L4.293 5.707l1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class NrkCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
