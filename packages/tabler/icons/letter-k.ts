import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLetterKIcon],svg[tabler-letter-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16m0-8h2l8-8m-8 8l8 8"></svg:path>`,
})
export class TablerLetterKIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
