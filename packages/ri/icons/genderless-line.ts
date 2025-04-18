import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGenderlessLineIcon],svg[ri-genderless-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934V1h2zM12 20a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class RiGenderlessLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
