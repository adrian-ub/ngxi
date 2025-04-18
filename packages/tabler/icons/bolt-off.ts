import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoltOffIcon],svg[tabler-bolt-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18m-5.788-5.79L11 21v-7H5l3.79-5.21m1.685-2.32L13 3v6m1 1h5l-2.104 2.893"></svg:path>`,
})
export class TablerBoltOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
