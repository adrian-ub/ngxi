import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDialpadIcon],svg[whh-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M887.62 751h-136q-28 0-48-20t-20-48v-69q0-28 20-48t48-20h136q29 0 49 20t20 48v69q0 28-20 48t-49 20m0-273h-136q-28 0-48-20t-20-48v-69q0-28 20-48t48-20h136q29 0 49 20t20 48v69q0 28-20 48t-49 20m0-273h-136q-28 0-48-20t-20-48V68q0-28 20-48t48-20h136q29 0 49 20t20 48v69q0 28-20 48t-49 20m-341 819h-136q-29 0-49-20t-20-48v-69q0-28 20-48t49-20h136q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-136q-29 0-49-20t-20-48v-69q0-28 20-48t49-20h136q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-136q-29 0-49-20t-20-48v-69q0-28 20-48t49-20h136q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-136q-29 0-49-20t-20-48V68q0-28 20-48t49-20h136q28 0 48 20t20 48v69q0 28-20 48t-48 20m-341 546h-137q-28 0-48-20t-20-48v-69q0-28 20-48t48-20h137q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-137q-28 0-48-20t-20-48v-69q0-28 20-48t48-20h137q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-137q-28 0-48-20t-20-48V68q0-28 20-48t48-20h137q28 0 48 20t20 48v69q0 28-20 48t-48 20"></svg:path>`,
})
export class WhhDialpadIcon {
  readonly viewBox = input("0 0 957 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
