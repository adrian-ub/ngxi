import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUTurnRightIcon],svg[tabler-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 20V8.5a4.5 4.5 0 0 1 9 0V17"></svg:path><svg:path d="m13 14l3 3l3-3"></svg:path></svg:g>`,
})
export class TablerUTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
