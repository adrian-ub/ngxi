import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMediaRewindIcon],svg[charm-media-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 3.75v8.5L1.75 8zm6.5 0v8.5L8.25 8z"></svg:path>`,
})
export class CharmMediaRewindIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
