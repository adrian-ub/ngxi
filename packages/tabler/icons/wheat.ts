import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWheatIcon],svg[tabler-wheat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.014 21.514v-3.75M5.93 9.504l-.43 1.604a4.986 4.986 0 0 0 3.524 6.105q1.495.402 2.99.801v-3.44a4.98 4.98 0 0 0-3.676-4.426z"></svg:path><svg:path d="M13.744 11.164a4.9 4.9 0 0 0 1.433-3.46a4.88 4.88 0 0 0-1.433-3.46l-1.73-1.73l-1.73 1.73a4.9 4.9 0 0 0-1.433 3.46a4.9 4.9 0 0 0 1.433 3.46"></svg:path><svg:path d="m18.099 9.504l.43 1.604a4.986 4.986 0 0 1-3.525 6.105l-2.99.801v-3.44a4.98 4.98 0 0 1 3.677-4.426z"></svg:path></svg:g>`,
})
export class TablerWheatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
