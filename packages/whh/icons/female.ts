import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFemaleIcon],svg[whh-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 634v134h64q26 0 45 19t19 45.5t-19 45t-45 18.5h-64v64q0 27-19 45.5t-45.5 18.5t-45-18.5T256 960v-64h-64q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h64V634Q145 611 72.5 523T0 320q0-87 43-160.5T159.5 43T320 0t160.5 43T597 159.5T640 320q0 115-73 203T384 634m-64.5-506Q240 128 184 184.5t-56 136T184 456t135.5 56t136-56T512 320.5t-56.5-136t-136-56.5"></svg:path>`,
})
export class WhhFemaleIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
