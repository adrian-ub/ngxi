import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone3BoldDuotoneIcon],svg[solar-microphone-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.5 0v-3A5.75 5.75 0 0 0 12 2m2 9.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zm-.25-3.75a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 11 7h2a.75.75 0 0 1 .75.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 11.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zm-1-3A.75.75 0 0 0 13 7h-2a.75.75 0 0 0 0 1.5z"></svg:path>`,
})
export class SolarMicrophone3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
