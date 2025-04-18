import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUserUnfollowFillIcon],svg[ri-user-unfollow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m7 3.586l2.121-2.121l1.415 1.414L20.414 18l2.121 2.121l-1.414 1.415L19 19.414l-2.121 2.121l-1.415-1.414L17.587 18l-2.121-2.121l1.414-1.415z"></svg:path>`,
})
export class RiUserUnfollowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
