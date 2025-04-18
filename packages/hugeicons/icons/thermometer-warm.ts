import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThermometerWarmIcon],svg[hugeicons-thermometer-warm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 22a4 4 0 0 0 2.902-6.752c-.506-.535-.76-.802-.83-.98c-.072-.179-.072-.415-.072-.886V4a2 2 0 1 0-4 0v9.382c0 .472 0 .707-.071.886c-.071.178-.325.445-.831.98A4 4 0 0 0 16.5 22m-6.187-6.17c-1.635-.288-2.95-1.726-3.11-3.57c-.19-2.184 1.315-4.111 3.36-4.304q.481-.044.937.037M10.22 4l.103 1.187M6.042 7.576l-.858-.765m-.573 5.694L3.5 12.61m3.368 4.477L6.155 18" color="currentColor"></svg:path>`,
})
export class HugeiconsThermometerWarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
