import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCentralizedIcon],svg[hugeicons-centralized-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m5.737-.737L21.5 2.5m-3.763 3.763c-.44-.44-.154-2.242-.04-3.263m.04 3.263c.44.44 2.242.154 3.263.04M6.263 17.737L2.5 21.5m3.763-3.763c-.44-.44-2.242-.154-3.263-.04m3.263.04c.44.44.154 2.242.04 3.263m11.434-3.263L21.5 21.5m-3.763-3.763c.44-.44 2.242-.154 3.263-.04m-3.263.04c-.44.44-.154 2.242-.04 3.263M6.263 6.263L2.5 2.5m3.763 3.763c.44-.44.154-2.242.04-3.263m-.04 3.263c-.44.44-2.242.154-3.263.04" color="currentColor"></svg:path>`,
})
export class HugeiconsCentralizedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
