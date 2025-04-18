import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsStampOutlineIcon],svg[teenyicons-stamp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 14.5h15m-8.5-8v3m2-3v3m-1-3a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-7 6v-1a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1z"></svg:path>`,
})
export class TeenyiconsStampOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
