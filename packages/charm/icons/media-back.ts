import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMediaBackIcon],svg[charm-media-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.25 13.25L4.75 8l8.5-5.25zm-11.5-9.5v8.5"></svg:path>`,
})
export class CharmMediaBackIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
