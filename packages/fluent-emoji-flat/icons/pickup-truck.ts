import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPickupTruckIcon],svg[fluent-emoji-flat-pickup-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F8312F" d="m9.61 19l-.01-5.96c.52-.64 1.32-1.04 2.16-1.04h3.6c.89 0 1.64.74 1.64 1.62V19h12v2l-1 1l1 1v2.65c0 .75-.61 1.35-1.35 1.35H3.36c-.75 0-1.35-.6-1.35-1.35V24l1.47-1.4L2.01 21c0-1.1.9-2 2-2z"></svg:path><svg:path fill="#50E2FF" d="M13 18.14V13.9c0-.5-.4-.9-.9-.9H9.62L5 19h7.14c.48 0 .86-.38.86-.86"></svg:path><svg:path fill="#321B41" d="M29.04 19c.55 0 1-.45 1-1s-.45-1-1-1H17.01v2zM7.5 30a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m16 0a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path><svg:path fill="#F9C23C" d="M29 21h-.5c-.85 0-1.54.71-1.5 1.57c.04.81.74 1.43 1.55 1.43H29z"></svg:path><svg:path fill="#E6E6E6" d="M2 24h.91c.6 0 1.09-.49 1.09-1.09v-.82c0-.6-.49-1.09-1.09-1.09H2zm5.5 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m16 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPickupTruckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
