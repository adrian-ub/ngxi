import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLetterFIcon],svg[tabler-letter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 4H7v16m0-8h8"></svg:path>`,
})
export class TablerLetterFIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
