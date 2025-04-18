import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZeppelinIcon],svg[tabler-zeppelin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6-8.5 6q-3.194 0-7.364-2.777L4 15v-3.33A46 46 0 0 1 2 10a46 46 0 0 1 2-1.67V5l2.135 1.778Q10.305 4 13.5 4"></svg:path><svg:path d="M10 15.5V20h6v-4"></svg:path></svg:g>`,
})
export class TablerZeppelinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
