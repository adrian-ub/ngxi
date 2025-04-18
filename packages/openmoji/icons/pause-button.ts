import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPauseButtonIcon],svg[openmoji-pause-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M40.5 17v38m-8-38v38"></svg:path>`,
})
export class OpenmojiPauseButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
