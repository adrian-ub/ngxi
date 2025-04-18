import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRadioIcon],svg[tabler-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3L4.629 6.749A1 1 0 0 0 4 7.677V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H4.5M4 12h16M7 12v-2m10 6v.01M13 16v.01"></svg:path>`,
})
export class TablerRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
