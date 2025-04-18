import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUserShared2FillIcon],svg[ri-user-shared-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m6 4v-3.5l5 4.5l-5 4.5V19h-3v-2z"></svg:path>`,
})
export class RiUserShared2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
