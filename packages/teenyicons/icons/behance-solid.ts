import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBehanceSolidIcon],svg[teenyicons-behance-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2h3a3 3 0 0 1 2.051 5.19A3.001 3.001 0 0 1 4 13H0zm1 6v4h3a2 2 0 1 0 0-4zm0-1h2a2 2 0 1 0 0-4H1zm13-3H9V3h5zM8 9.5a3.5 3.5 0 1 1 7 0v.5H9.05a2.5 2.5 0 0 0 4.477.964l.81.586A3.5 3.5 0 0 1 8 9.5M9.05 9h4.9a2.5 2.5 0 0 0-4.9 0" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBehanceSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
