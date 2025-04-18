import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMapPin5Icon],svg[lineicons-map-pin-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.254 13.538a5.376 5.376 0 1 0-1.5 0v8.552a.75.75 0 1 0 1.5 0zM8.629 8.215a3.875 3.875 0 1 1 7.75 0a3.875 3.875 0 0 1-7.75 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMapPin5Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
