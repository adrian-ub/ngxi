import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkLynIcon],svg[nrk-lyn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12L7 1h12l-6 11h5L8 23l2-11z"></svg:path>`,
})
export class NrkLynIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
