import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSuitcaseRollingIcon],svg[la-suitcase-rolling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3c-1.654 0-3 1.346-3 3v3h2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h2V6c0-1.654-1.346-3-3-3zm-7 8v15h2v2h2v-2h10v2h2v-2h2V11zm2 2h14v11H9zm2 3v2h10v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class LaSuitcaseRollingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
