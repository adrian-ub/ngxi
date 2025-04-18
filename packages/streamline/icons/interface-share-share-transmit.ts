import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceShareShareTransmitIcon],svg[streamline-interface-share-share-transmit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2.75" cy="7" r="2.25"></svg:circle><svg:circle cx="11.25" cy="11.25" r="2.25"></svg:circle><svg:circle cx="11.25" cy="2.75" r="2.25"></svg:circle><svg:path d="m4.76 6l4.48-2.25M4.76 8l4.48 2.25"></svg:path></svg:g>`,
})
export class StreamlineInterfaceShareShareTransmitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
