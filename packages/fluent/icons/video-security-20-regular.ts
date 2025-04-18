import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoSecurity20RegularIcon],svg[fluent-video-security-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.894l3.255-1.831a.5.5 0 0 1 .745.435V11.5a.5.5 0 0 1-.746.435L14 10.1v.9a2 2 0 0 1-2 2h-2v1a4 4 0 0 1-4 4H3.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2A1.5 1.5 0 0 0 7 13.5V13H4a2 2 0 0 1-2-2zm6 8v.5A2.5 2.5 0 0 1 5.5 16H4v1h2a3 3 0 0 0 3-3v-1zm-4-1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m10.005-4.96v1.914L17 10.644v-5.29z"></svg:path>`,
})
export class FluentVideoSecurity20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
