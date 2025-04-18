import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsUserSolidCircleIcon],svg[zondicons-user-solid-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20M7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0m-3.65 8.44a8 8 0 0 0 13.3 0a15.94 15.94 0 0 0-13.3 0"></svg:path>`,
})
export class ZondiconsUserSolidCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
