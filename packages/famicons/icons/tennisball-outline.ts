import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsTennisballOutlineIcon],svg[famicons-tennisball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M461.43 271.44c-5.09.37-8.24.56-13.43.56c-114.88 0-208-93.12-208-208c0-5.37.2-8.69.6-14M49.65 240.56S58.84 240 64 240c114.88 0 208 93.12 208 208c0 5.38-.61 14-.61 14"></svg:path>`,
})
export class FamiconsTennisballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
