import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLetterNSmallIcon],svg[tabler-letter-n-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16V8l4 8V8"></svg:path>`,
})
export class TablerLetterNSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
