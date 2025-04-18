import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidWindowMaximizeIcon],svg[fa-solid-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48m-16 160H64v-84c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class FaSolidWindowMaximizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
