import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbErrorIcon],svg[hugeicons-usb-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.973 10.501c-.018-1.24-.11-1.943-.58-2.415C12.81 7.5 11.868 7.5 9.986 7.5H7.99c-1.881 0-2.822 0-3.406.586s-.585 1.53-.585 3.416v5.502c0 .93 0 1.395.077 1.782a4 4 0 0 0 3.136 3.144c.213.043.451.061.778.07m4.491-14.5v-2c0-1.404 0-2.107-.336-2.611a2 2 0 0 0-.55-.552C11.09 2 10.39 2 8.988 2s-2.103 0-2.606.337a2 2 0 0 0-.55.552c-.337.504-.337 1.207-.337 2.611v2m3.004-3h1m5.475 11.851v1.292m-.008 2.107h.02M12.007 22h5.884c1.569 0 2.653-1.729 1.821-3.06l-1.44-2.554l-1.504-2.38a2.093 2.093 0 0 0-3.553 0c-.347.556-.948 1.449-1.492 2.38c-.3.512-.586 1.026-.821 1.457c-.398.727-.944 1.455-.89 2.282c.066.99.874 1.875 1.995 1.875" color="currentColor"></svg:path>`,
})
export class HugeiconsUsbErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
