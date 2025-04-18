import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCupOutlineIcon],svg[teenyicons-cup-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11.5 6.5v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1Zm0 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2M4.5 4V2m3 2V0"></svg:path>`,
})
export class TeenyiconsCupOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
