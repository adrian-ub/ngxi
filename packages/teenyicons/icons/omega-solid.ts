import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsOmegaSolidIcon],svg[teenyicons-omega-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 6.5a6.5 6.5 0 1 1 9 6.002V14h5v1H9v-3h.026a.5.5 0 0 1 .307-.313a5.5 5.5 0 1 0-3.667 0a.5.5 0 0 1 .308.313H6v3H0v-1h5v-1.498A6.5 6.5 0 0 1 1 6.5" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsOmegaSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
