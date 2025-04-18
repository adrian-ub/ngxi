import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHouzzIcon],svg[la-houzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2.281L8 6.844V16l8-4.563zm0 9.156L24 16V6.844zM24 16l-8 4.563v9.156l8-4.563zm-8 4.563L8 16v9.156z"></svg:path>`,
})
export class LaHouzzIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
