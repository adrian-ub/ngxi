import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitGridIcon],svg[uit-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5m-10 19H3v-5.5h8.5zm0-6.5H3v-5h8.5zM21 21h-8.5v-5.5H21zm0-6.5h-8.5v-5H21zm0-6H3V3h18z"></svg:path>`,
})
export class UitGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
