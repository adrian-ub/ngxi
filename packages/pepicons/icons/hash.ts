import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsHashIcon],svg[pepicons-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 7.25h12m-12 5.5h12M7.75 4l-1 12m6.5-12l-1 12"></svg:path>`,
})
export class PepiconsHashIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
