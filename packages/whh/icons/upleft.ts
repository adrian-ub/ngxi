import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhUpleftIcon],svg[whh-upleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1005.488 915l-91 90q-19 19-46 19t-46-19l-566-563v325q0 27-19 45.5t-45 18.5h-128q-26 0-45-18.5t-19-45.5V64q0-27 18.5-45.5T64.488 0h704q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19h-334l571 568q19 19 19 45.5t-19 45.5"></svg:path>`,
})
export class WhhUpleftIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
