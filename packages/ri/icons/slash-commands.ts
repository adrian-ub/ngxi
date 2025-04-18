import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSlashCommandsIcon],svg[ri-slash-commands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h2v4H3zm6.788 18H7.66l6.551-18h2.129zM21 3h-2v4h2z"></svg:path>`,
})
export class RiSlashCommandsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
