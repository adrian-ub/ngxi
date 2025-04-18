import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCloseWifiIcon],svg[icon-park-outline-close-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 18.965c-6.775-6.42-15.881-8.96-24.5-7.617M38 25.799a19.7 19.7 0 0 0-9.5-5.284M10 25.799a19.8 19.8 0 0 1 4.36-3.299M16 32.314a11.26 11.26 0 0 1 5-2.91"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M24 40a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 40L8 8M4 18.965a29 29 0 0 1 3.5-2.84"></svg:path></svg:g>`,
})
export class IconParkOutlineCloseWifiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
