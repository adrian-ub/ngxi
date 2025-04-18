import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPenConnectBluetoothIcon],svg[iconoir-pen-connect-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.5 17.5l-1 4l3.731-.933a1 1 0 0 0 .465-.263L21.5 8.5a2.12 2.12 0 0 0 0-3v0a2.12 2.12 0 0 0-3 0l-4 4m3-3l3 3M5 6.6l7 5.1L8.333 15V3L12 6.3l-7 5.1"></svg:path>`,
})
export class IconoirPenConnectBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
