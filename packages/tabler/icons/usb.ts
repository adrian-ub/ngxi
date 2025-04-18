import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUsbIcon],svg[tabler-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-2V5.5M7 10v3l5 3m0-1.5l5-2V10m-1 0h2V8h-2z"></svg:path><svg:path d="M6 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4-3.5h4L12 3z"></svg:path></svg:g>`,
})
export class TablerUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
