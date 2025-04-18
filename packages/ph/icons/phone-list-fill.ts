import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPhoneListFillIcon],svg[ph-phone-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.88 183.08A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15a.6.6 0 0 0 0 .12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.18-1.4l.12.06l47.1 21.11a16 16 0 0 1 9.56 16.62M144 72h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m0 40h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhPhoneListFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
