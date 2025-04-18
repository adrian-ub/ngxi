import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSendAndArchiveIcon],svg[ic-round-send-and-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m2.15 5.85l-1.79 1.79c-.2.2-.51.2-.71 0l-1.79-1.79c-.32-.31-.1-.85.35-.85h1.29v-2.5c0-.28.22-.5.5-.5s.5.22.5.5V17h1.29a.5.5 0 0 1 .36.85"></svg:path><svg:path fill="currentColor" d="M17 10c.1 0 .19.01.28.01L3 4v6l8 2l-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7"></svg:path>`,
})
export class IcRoundSendAndArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
