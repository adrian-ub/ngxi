import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelChargingIcon],svg[raphael-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.27 13.5h-1.103v-1.416a1 1 0 0 0-1-1H5.25a1 1 0 0 0-1 1v7.832a1 1 0 0 0 1 1h19.917a1 1 0 0 0 1-1V18.5h1.104c.266 0 .48-.448.48-1v-3c0-.552-.214-1-.48-1zm-8.745 3.342l-6.733 3.366l3.366-3.366l-1.683-1.684l6.733-3.366l-3.366 3.366z"></svg:path>`,
})
export class RaphaelChargingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
