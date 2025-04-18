import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAirplayIcon],svg[zmdi-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m107 405l128-128l128 128zM427 0q17 0 29.5 12.5T469 43v256q0 17-12.5 29.5T427 341h-86v-42h86V43H43v256h85v42H43q-18 0-30.5-12.5T0 299V43q0-18 12.5-30.5T43 0z"></svg:path>`,
})
export class ZmdiAirplayIcon {
  readonly viewBox = input("0 0 472 408")
  readonly width = input("1.16em")
  readonly height = input("1em")
}
