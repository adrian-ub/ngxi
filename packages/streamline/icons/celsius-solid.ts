import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCelsiusSolidIcon],svg[streamline-celsius-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M2.25 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8 4a2 2 0 0 1 2-2c.934 0 1.803.614 2.057 1.333a1 1 0 0 0 1.886-.666C13.373 1.056 11.679 0 10 0a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4c1.678 0 3.373-1.056 3.943-2.667a1 1 0 1 0-1.886-.666C11.803 11.387 10.934 12 10 12a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCelsiusSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
