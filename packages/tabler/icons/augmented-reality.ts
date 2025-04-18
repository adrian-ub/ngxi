import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAugmentedRealityIcon],svg[tabler-augmented-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2m-8-3.5l4-2.5m-8 0l4 2.5V17l4-2.5V10l-4-2.5z"></svg:path><svg:path d="M8 10v4.5l4 2.5"></svg:path></svg:g>`,
})
export class TablerAugmentedRealityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
