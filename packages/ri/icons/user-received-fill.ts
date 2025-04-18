import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUserReceivedFillIcon],svg[ri-user-received-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m7.418 4h3.586v2h-3.586l1.829 1.828l-1.414 1.415L15.59 18l4.243-4.243l1.414 1.415z"></svg:path>`,
})
export class RiUserReceivedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
