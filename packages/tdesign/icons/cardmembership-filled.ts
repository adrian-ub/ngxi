import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCardmembershipFilledIcon],svg[tdesign-cardmembership-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9V3H1v6zm0 2v10H1V11h12v5.497l2.5-2.163l2.5 2.163V11z"></svg:path>`,
})
export class TdesignCardmembershipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
