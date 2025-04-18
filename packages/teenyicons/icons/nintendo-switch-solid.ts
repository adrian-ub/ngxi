import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNintendoSwitchSolidIcon],svg[teenyicons-nintendo-switch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 .5v12a.5.5 0 0 1-.5.5h-3A3.5 3.5 0 0 1 0 9.5v-6A3.5 3.5 0 0 1 3.5 0h3a.5.5 0 0 1 .5.5m-5 4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.5 10a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15 5.5v6a3.5 3.5 0 0 1-3.5 3.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3A3.5 3.5 0 0 1 15 5.5m-5 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNintendoSwitchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
