import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixConnectionLocalIcon],svg[ix-connection-local-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m480 149.333l-85.333 213.334H117.333l34.134-85.334l-29.188.023c-6.88 11.876-19.321 20.128-33.761 21.194l-3.185.117c-23.564 0-42.666-19.103-42.666-42.667s19.102-42.667 42.666-42.667c15.792 0 29.581 8.58 36.958 21.332l46.242.002l34.134-85.334zM416.981 192h-185.45l-51.2 128h185.45z" clip-rule="evenodd"></svg:path>`,
})
export class IxConnectionLocalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
