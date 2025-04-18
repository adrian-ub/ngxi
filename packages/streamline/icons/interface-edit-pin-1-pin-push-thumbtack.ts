import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPin1PinPushThumbtackIcon],svg[streamline-interface-edit-pin-1-pin-push-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="9" cy="5" r="4.5"></svg:circle><svg:path d="m.5 13.5l5.58-5.07"></svg:path><svg:circle cx="8.5" cy="3.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditPin1PinPushThumbtackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
