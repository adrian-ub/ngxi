import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTargetSolidIcon],svg[teenyicons-target-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m0 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 0a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M3 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsTargetSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
