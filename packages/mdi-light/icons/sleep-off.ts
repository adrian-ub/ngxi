import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightSleepOffIcon],svg[mdi-light-sleep-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.79 4.46l.71-.71L20.25 20.5l-.71.71L14 15.66V16H9v-1l1.86-2.5zM2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2zm12-4v1l-1.21 1.62l-.72-.71l.68-.91h-1.59l-1-1zm-3.74 6h3.08l-1.76-1.76zM16 5h5v1l-3.74 5H21v1h-5v-1l3.75-5H16z"></svg:path>`,
})
export class MdiLightSleepOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
