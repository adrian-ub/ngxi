import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSignalIcon],svg[openmoji-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M35.923 15.942a20.047 20.047 0 0 0-17.091 30.573l-1.924 8.532l8.441-1.984a20.069 20.069 0 1 0 10.574-37.121"></svg:path><svg:path fill="none" stroke="#000" stroke-dasharray="6.116 4.587" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M60.038 36.105a24.006 24.006 0 0 0-27.67-23.867C15.753 14.605 6.65 34.103 15.44 48.278l-2.296 10.184a.456.456 0 0 0 .55.544l10.142-2.384c15.508 9.44 36.24-2.15 36.2-20.517Z"></svg:path><svg:path fill="#61b2e4" d="M35.923 15.942a20.047 20.047 0 0 0-17.091 30.573l-1.924 8.532l8.441-1.984a20.069 20.069 0 1 0 10.574-37.121"></svg:path><svg:path fill="none" stroke="#61b2e4" stroke-dasharray="6.116 4.587" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M60.038 36.105a24.006 24.006 0 0 0-27.67-23.867C15.753 14.605 6.65 34.103 15.44 48.278l-2.296 10.184a.456.456 0 0 0 .55.544l10.142-2.384c15.508 9.44 36.24-2.15 36.2-20.517Z"></svg:path>`,
})
export class OpenmojiSignalIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
