import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIpmiviewIcon],svg[arcticons-ipmiview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 33.317l2.727-3.988l2.878 9.293l2.641-26.484l4.815 22.882l3.03-3.259l2.367 5.502l2.914-9.276l2.541 4.504l2.683-23.113l1.16 14.374l2.818-5.17l2.488 2.704l2.614 7.769H43.5"></svg:path>`,
})
export class ArcticonsIpmiviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
