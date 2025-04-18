import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUsbSolidIcon],svg[iconoir-usb-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.5 2v15m0-3l5.5-2V8.5M12.5 16L7 14.5v-3"></svg:path><svg:path fill="currentColor" d="M12.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m4-16.5v3h3v-3z"></svg:path><svg:path d="m10.5 4l2-2l2 2"></svg:path><svg:path fill="currentColor" d="M7 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class IconoirUsbSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
