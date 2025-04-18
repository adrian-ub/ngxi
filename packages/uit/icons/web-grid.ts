import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitWebGridIcon],svg[uit-web-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5m-7 19H3v-8.5h11.5zm0-9.5H3V3h11.5zM21 21h-5.5V3H21z"></svg:path>`,
})
export class UitWebGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
