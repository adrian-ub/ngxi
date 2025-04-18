import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCircleIcon],svg[pepicons-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 10a5.5 5.5 0 1 0 11 0a5.5 5.5 0 0 0-11 0Zm9 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
