import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1listIcon],svg[arcticons-1list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.14 34.07a2.64 2.64 0 1 1 2.64-2.64a2.64 2.64 0 0 1-2.64 2.64m0-7.43A2.65 2.65 0 1 1 9.78 24a2.65 2.65 0 0 1-2.64 2.65Zm0-7.43a2.64 2.64 0 1 1 2.64-2.64a2.64 2.64 0 0 1-2.64 2.64m5.61 12.17H43.5m-30.74-7.43h19.57m-19.58-7.43h9.01"></svg:path>`,
})
export class Arcticons1listIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
