import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUTurnLeftIcon],svg[tabler-u-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 20V8.5a4.5 4.5 0 1 0-9 0V17"></svg:path><svg:path d="m11 14l-3 3l-3-3"></svg:path></svg:g>`,
})
export class TablerUTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
