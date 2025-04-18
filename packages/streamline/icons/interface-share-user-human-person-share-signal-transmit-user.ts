import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceShareUserHumanPersonShareSignalTransmitUserIcon],svg[streamline-interface-share-user-human-person-share-signal-transmit-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="6.75" r="2.25"></svg:circle><svg:path d="M11 13.5a4.5 4.5 0 0 0-8 0"></svg:path><svg:path d="M12 10.56a6.25 6.25 0 1 0-9.92 0"></svg:path></svg:g>`,
})
export class StreamlineInterfaceShareUserHumanPersonShareSignalTransmitUserIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
