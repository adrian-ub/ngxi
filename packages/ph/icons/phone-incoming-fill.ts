import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPhoneIncomingFillIcon],svg[ph-phone-incoming-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.88 183.08A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62M152 112h40a8 8 0 0 0 0-16h-20.68l34.34-34.34a8 8 0 0 0-11.32-11.32L160 84.69V64a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhPhoneIncomingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
