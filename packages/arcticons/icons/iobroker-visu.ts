import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIobrokerVisuIcon],svg[arcticons-iobroker-visu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 16.713v10.705M13.5 10.27h21v23.59h-21zm8.02 27.46h4.96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.028 14.228c3.8 1.035 6.256 4.775 5.742 8.742c-.513 3.968-3.837 6.933-7.77 6.933s-7.257-2.966-7.77-6.933c-.514-3.967 1.942-7.707 5.741-8.742"></svg:path><svg:rect width="29" height="39" x="9.414" y="4.124" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5" ry="5"></svg:rect><svg:circle cx="24" cy="14.228" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIobrokerVisuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
