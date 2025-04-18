import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputBoldIcon],svg[solar-password-minimalistic-input-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2.006c2.636-.027 4.104-.191 5.078-1.166C22 17.657 22 15.771 22 12s0-5.657-1.172-6.828c-.974-.975-2.442-1.139-5.078-1.166z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 18.828C4.343 20 6.229 20 10 20h3V4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828M13 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordMinimalisticInputBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
