import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitGridsIcon],svg[uit-grids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5m-13 19H3V3h5.5zm6 0h-5V3h5zm6.5 0h-5.5V3H21z"></svg:path>`,
})
export class UitGridsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
