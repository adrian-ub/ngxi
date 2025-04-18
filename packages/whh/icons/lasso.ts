import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLassoIcon],svg[whh-lasso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M638 753q-5 29-25.5 50.5T563 830l-119 178q-7 12-20 15.5t-24-3t-14.5-20T388 975l106-157q-31-19-41-53q-93-10-178-51t-144.5-98t-95-127T0 352q0-95 68.5-176T255 47.5T512 0t257 47.5T955.5 176t68.5 176q0 82-49.5 164.5T835.5 663T638 753M512 64q-122 0-225 38.5t-163 105T64 352q0 55 30.5 113t82 106.5t125 84T455 701q11-27 35-44t54-17q26 0 48.5 13.5T627 690q141-35 237-135t96-203q0-78-60-144.5t-163-105T512 64"></svg:path>`,
})
export class WhhLassoIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
