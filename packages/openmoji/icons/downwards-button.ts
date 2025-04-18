import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDownwardsButtonIcon],svg[openmoji-downwards-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M57.135 17L47 35.882l-9.93 18.502c-.441.821-1.699.821-2.14 0L25 35.882L14.865 17"></svg:path>`,
})
export class OpenmojiDownwardsButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
