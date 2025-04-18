import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryFillIcon],svg[ph-medal-military-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 40H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 121.68a17 17 0 0 0 10-15.47V57a17 17 0 0 0-17-17M96 56h64v72.67l-32 14.54l-32-14.54Zm32 168a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhMedalMilitaryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
