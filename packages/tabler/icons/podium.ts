import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPodiumIcon],svg[tabler-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14l-.621 2.485A2 2 0 0 1 16.439 12H7.561a2 2 0 0 1-1.94-1.515zm2 0V6a3 3 0 0 1 3-3m-2 9l1 9m7-9l-1 9m-8 0h10"></svg:path>`,
})
export class TablerPodiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
