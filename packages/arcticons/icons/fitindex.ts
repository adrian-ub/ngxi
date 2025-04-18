import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFitindexIcon],svg[arcticons-fitindex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.857 9.255L4.5 28.613m39 7.929L23.857 16.646V9.255L43.5 29.151zm-19.459 2.203L13.027 27.477v-7.391l11.014 11.268z"></svg:path>`,
})
export class ArcticonsFitindexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
