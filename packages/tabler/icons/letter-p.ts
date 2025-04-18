import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLetterPIcon],svg[tabler-letter-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20V4h5.5a4 4 0 0 1 0 9H7"></svg:path>`,
})
export class TablerLetterPIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
