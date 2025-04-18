import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpeaker028RegularIcon],svg[fluent-speaker-0-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 4.814c0-1.094-1.307-1.66-2.105-.912l-4.937 4.63a1.75 1.75 0 0 1-1.197.473H5.25A3.25 3.25 0 0 0 2 12.255v3.492a3.25 3.25 0 0 0 3.25 3.25h3.012c.444 0 .872.17 1.196.473l4.937 4.626c.799.748 2.105.182 2.105-.912zm-6.016 4.812L15 5.39v17.216l-4.516-4.232a3.25 3.25 0 0 0-2.222-.878H5.25a1.75 1.75 0 0 1-1.75-1.75v-3.492c0-.966.784-1.75 1.75-1.75h3.011a3.25 3.25 0 0 0 2.223-.88"></svg:path>`,
})
export class FluentSpeaker028RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
