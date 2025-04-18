import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbConnected03Icon],svg[hugeicons-usb-connected-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.012 11.5c0-1.885 0-2.828-.586-3.414c-.587-.586-1.53-.586-3.418-.586H9.005c-1.887 0-2.831 0-3.418.586c-.586.586-.586 1.529-.586 3.415V17c0 .929 0 1.393.077 1.78a4 4 0 0 0 3.146 3.143c.31.061.671.073 1.282.076M13.51 7.5v-2c0-1.404 0-2.106-.338-2.61a2 2 0 0 0-.552-.552C12.115 2 11.412 2 10.006 2s-2.11 0-2.614.338a2 2 0 0 0-.553.551c-.337.505-.337 1.207-.337 2.611v2m2.999-3h1"></svg:path><svg:path d="M13.644 18.426s.377.115.902.883c0 0 .768-1.658 1.834-2.234m2.62.941c0 2.2-1.786 3.984-3.988 3.984a3.986 3.986 0 0 1-3.988-3.984c0-2.2 1.786-3.983 3.988-3.983A3.985 3.985 0 0 1 19 18.016"></svg:path></svg:g>`,
})
export class HugeiconsUsbConnected03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
