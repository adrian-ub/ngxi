import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBbqOutlineIcon],svg[lsicon-bbq-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m2.204 13.797l2.71-2.71m6.05-6.052a1.786 1.786 0 1 1 2.527-2.525a1.786 1.786 0 0 1-2.526 2.525Zm-.504.506v2.694H7.765V5.54zM6.08 7.56l2.36 2.36l-2.103 2.103l-2.358-2.358z"></svg:path>`,
})
export class LsiconBbqOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
