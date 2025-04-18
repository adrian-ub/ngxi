import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSpoonIcon],svg[fa-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 528q0 145-57 243.5T431 907l45 821q2 26-16 45t-44 19H224q-26 0-44-19t-16-45l45-821q-95-37-152-135.5T0 528q0-128 42.5-249.5T160 78.5T320 0t160 78.5t117.5 200T640 528"></svg:path>`,
})
export class FaSpoonIcon {
  readonly viewBox = input("0 0 640 1792")
  readonly width = input("0.36em")
  readonly height = input("1em")
}
