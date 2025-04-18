import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowUpIcon],svg[ix-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.328 405.32V188.347l70.25 70.25l30.167-30.167l-121.75-121.75l-121.74 121.75l30.167 30.167l70.239-70.248V405.32z"></svg:path>`,
})
export class IxArrowUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
