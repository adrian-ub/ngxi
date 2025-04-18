import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFahrenheitSolidIcon],svg[streamline-fahrenheit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M0 2.25a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M6 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8v3.5h4a1 1 0 1 1 0 2H8V13a1 1 0 1 1-2 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFahrenheitSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
