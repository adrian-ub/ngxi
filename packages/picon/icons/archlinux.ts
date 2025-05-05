import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconArchlinuxIcon],svg[picon-archlinux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2.5-5L4 2H3l1-2l2.5 5L6 6h1l1 2l-3-1Q4 2 3 7"></svg:path>`,
})
export class PiconArchlinuxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
