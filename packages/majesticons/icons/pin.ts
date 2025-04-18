import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPinIcon],svg[majesticons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.956 18.956L9 15l-3.956-3.956a1 1 0 0 1 .314-1.626l5.261-2.255a1 1 0 0 0 .535-.548l1.283-3.207a1 1 0 0 1 1.635-.336l6.856 6.856a1 1 0 0 1-.336 1.635l-3.207 1.283a1 1 0 0 0-.548.535l-2.255 5.261a1 1 0 0 1-1.626.314"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 20l5-5m0 0l3.956 3.956a1 1 0 0 0 1.626-.314l2.255-5.261a1 1 0 0 1 .548-.535l3.207-1.283a1 1 0 0 0 .336-1.635l-6.856-6.856a1 1 0 0 0-1.635.336l-1.283 3.207a1 1 0 0 1-.535.548L5.358 9.418a1 1 0 0 0-.314 1.626z"></svg:path></svg:g>`,
})
export class MajesticonsPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
