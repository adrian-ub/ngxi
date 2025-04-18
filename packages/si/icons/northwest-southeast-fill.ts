import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNorthwestSoutheastFillIcon],svg[si-northwest-southeast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.293 5.293A1 1 0 0 1 6 5h4a1 1 0 1 1 0 2H8.414L17 15.586V14a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586L7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 .293-.707" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthwestSoutheastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
