import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMediaFastForwardIcon],svg[charm-media-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 3.75v8.5l6-4.25zm-6.5 0v8.5l6-4.25z"></svg:path>`,
})
export class CharmMediaFastForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
