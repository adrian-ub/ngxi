import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCrutchesOffIcon],svg[tabler-crutches-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.178 4.174A2 2 0 0 1 10 3h4a2 2 0 1 1 0 4h-3m0 14h2m-1 0v-4.092a3 3 0 0 1 .504-1.664l.992-1.488a3 3 0 0 0 .097-.155M14 10V7m-2 14v-4.092a3 3 0 0 0-.504-1.664l-.992-1.488A3 3 0 0 1 10 12.092V10m0 1h1M3 3l18 18"></svg:path>`,
})
export class TablerCrutchesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
