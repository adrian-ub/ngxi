import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPodiumOffIcon],svg[tabler-podium-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8h7l-.621 2.485A2 2 0 0 1 16.439 12H16m-4 0H7.561a2 2 0 0 1-1.94-1.515L5 8h3M7 8V7m.864-3.106A3 3 0 0 1 10 3m-2 9l1 9m6.599-5.387L15 21m-8 0h10M3 3l18 18"></svg:path>`,
})
export class TablerPodiumOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
