import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryDuotoneIcon],svg[ph-medal-military-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 192a40 40 0 1 1-40-40a40 40 0 0 1 40 40m39-144h-39v85.82l42.72-19.42a9 9 0 0 0 5.28-8.2V57a9 9 0 0 0-9-9M88 48H49a9 9 0 0 0-9 9v49.2a9 9 0 0 0 5.28 8.2L88 133.82Z" opacity=".2"></svg:path><svg:path d="M207 40H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 121.68a17 17 0 0 0 10-15.47V57a17 17 0 0 0-17-17m-47 16v72.67l-32 14.54l-32-14.54V56ZM48 106.21V57a1 1 0 0 1 1-1h31v65.39l-31.41-14.27a1 1 0 0 1-.59-.91M128 224a32 32 0 1 1 32-32a32 32 0 0 1-32 32m80-117.79a1 1 0 0 1-.59.91L176 121.39V56h31a1 1 0 0 1 1 1Z"></svg:path></svg:g>`,
})
export class PhMedalMilitaryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
