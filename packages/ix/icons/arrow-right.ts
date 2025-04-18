import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowRightIcon],svg[ix-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.68 277.328h216.973l-70.25 70.25l30.167 30.167l121.75-121.75l-121.75-121.74l-30.167 30.167l70.247 70.239H106.68z"></svg:path>`,
})
export class IxArrowRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
