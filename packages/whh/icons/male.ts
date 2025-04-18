import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMaleIcon],svg[whh-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M955.5 477q-28.5 0-48.5-20t-20-48V223L622 488q61 88 61 194q0 93-46 171.5t-124.5 124t-171 45.5T170 977.5t-124.5-124T0 682t45.5-171.5t124.5-124T341 341q107 0 194 60l266-265H614q-28 0-48-20t-20-48t20-48t48-20h342q28 0 48 20t20 48v341q0 28-20 48t-48.5 20m-614 0Q257 477 197 537t-60 145t60 145t144.5 60T486 827t60-145t-60-145t-144.5-60"></svg:path>`,
})
export class WhhMaleIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
