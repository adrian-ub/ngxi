import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAugmentedReality2Icon],svg[tabler-augmented-reality-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.5"></svg:path><svg:path d="m17 17l-4-2.5l4-2.5l4 2.5V19l-4 2.5z"></svg:path><svg:path d="M13 14.5V19l4 2.5m0-4.5l4-2.5M11 4h2"></svg:path></svg:g>`,
})
export class TablerAugmentedReality2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
