import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronRightBarSmallIcon],svg[ix-chevron-right-bar-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 384h42.667V128H320zm-153.812-36.48l30.293 30.293L318.081 256l-121.6-121.814l-30.293 30.294L257.921 256z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronRightBarSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
