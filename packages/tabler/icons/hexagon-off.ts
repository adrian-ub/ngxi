import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonOffIcon],svg[tabler-hexagon-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.693 4.69l2.336-1.39a2.06 2.06 0 0 1 2 0l6 3.573H19a2 2 0 0 1 1 1.747v6.536c0 .246-.045.485-.13.707m-2.16 1.847l-4.739 3.027a2 2 0 0 1-1.942 0l-6-3.833A2 2 0 0 1 4 15.157V8.62a2 2 0 0 1 1.029-1.748l1.154-.687M3 3l18 18"></svg:path>`,
})
export class TablerHexagonOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
