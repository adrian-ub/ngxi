import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDeliveryTruckIcon],svg[fluent-emoji-flat-delivery-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E6E6E6" d="m2.16 19.3l3.37-6.41c.29-.55.86-.89 1.48-.89H14l1 9l-13-1c0-.27.05-.45.16-.7"></svg:path><svg:path fill="#26C9FC" d="M2.31 19H8.9c.61 0 1.1-.49 1.1-1.1v-3.79c0-.61-.49-1.1-1.1-1.1H5.48z"></svg:path><svg:path fill="#FF822D" d="M2 20v5.23c0 .98.8 1.78 1.78 1.78H28.2c.99 0 1.8-.81 1.8-1.8V20l-7.5-3l-8.5 3z"></svg:path><svg:path fill="#321B41" d="M12 26.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m15 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="#F4F4F4" d="M10 26.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m15 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill="#CA0B4A" d="M30 22h-.5c-.85 0-1.54.71-1.5 1.57c.04.81.74 1.43 1.55 1.43H30z"></svg:path><svg:path fill="#FCD53F" d="M17 7h10c1.66 0 3 1.34 3 3v10H14V10c0-1.66 1.34-3 3-3M2 25h.91c.6 0 1.09-.49 1.09-1.09v-1.82c0-.6-.49-1.09-1.09-1.09H2z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatDeliveryTruckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
