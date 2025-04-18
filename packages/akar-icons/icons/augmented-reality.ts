import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsAugmentedRealityIcon],svg[akar-icons-augmented-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M10.971 6.617a2 2 0 0 1 2.058 0l3.486 2.092a1 1 0 0 1 .485.857v4.302a2 2 0 0 1-.971 1.715l-3 1.8a2 2 0 0 1-2.058 0l-3-1.8A2 2 0 0 1 7 13.868V9.566a1 1 0 0 1 .486-.857z"></svg:path><svg:path d="m7 9l5 2.759m0 0L17 9m-5 2.759V17"></svg:path><svg:path stroke-linecap="round" d="M6 2H4a2 2 0 0 0-2 2v2m16 16h2a2 2 0 0 0 2-2v-2m0-12V4a2 2 0 0 0-2-2h-2M2 18v2a2 2 0 0 0 2 2h2"></svg:path></svg:g>`,
})
export class AkarIconsAugmentedRealityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
