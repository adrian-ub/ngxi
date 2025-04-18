import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPennantIcon],svg[tabler-pennant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h4m-2 0V3m0 1l9 4l-9 4"></svg:path>`,
})
export class TablerPennantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
