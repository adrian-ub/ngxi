import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUsbkeyboardIcon],svg[arcticons-usbkeyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12.13" height="12.13" x="4.5" y="11.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.73"></svg:rect><svg:rect width="12.13" height="12.13" x="16.63" y="11.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.73"></svg:rect><svg:rect width="12.13" height="12.13" x="28.77" y="11.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.73"></svg:rect><svg:rect width="12.13" height="12.13" x="7.1" y="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.73"></svg:rect><svg:rect width="12.13" height="12.13" x="19.23" y="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.73"></svg:rect><svg:rect width="12.13" height="12.13" x="31.37" y="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.73"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.65 21.43h2.1m-2.1-7h2.1m-1.05 0v7m-11.28 5.14h3.5v5.25a1.76 1.76 0 0 1-1.75 1.75h0a1.75 1.75 0 0 1-1.75-1.75v-.58m12-4.67v7m3.76 0l-2.88-3.5l2.88-3.48m-2.88 3.48h-.88m9.09-10.96a2.32 2.32 0 0 0 4.64 0v-2.36a2.32 2.32 0 0 0-4.64 0ZM8.25 14.43v4.68a2.32 2.32 0 0 0 4.64 0v-4.68m22.79 12.14v7h3.5"></svg:path>`,
})
export class ArcticonsUsbkeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
