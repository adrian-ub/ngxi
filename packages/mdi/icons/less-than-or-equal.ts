import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLessThanOrEqualIcon],svg[mdi-less-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2.27L5 10.14L18.5 18l1-1.73l-10.53-6.13L19.5 4zM5 20v2h15v-2z"></svg:path>`,
})
export class MdiLessThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
