import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBrightnessDownIcon],svg[zondicons-brightness-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6M9 4a1 1 0 1 1 2 0a1 1 0 1 1-2 0m4.54 1.05a1 1 0 1 1 1.41 1.41a1 1 0 1 1-1.41-1.41M16 9a1 1 0 1 1 0 2a1 1 0 1 1 0-2m-1.05 4.54a1 1 0 1 1-1.41 1.41a1 1 0 1 1 1.41-1.41M11 16a1 1 0 1 1-2 0a1 1 0 1 1 2 0m-4.54-1.05a1 1 0 1 1-1.41-1.41a1 1 0 1 1 1.41 1.41M4 11a1 1 0 1 1 0-2a1 1 0 1 1 0 2m1.05-4.54a1 1 0 1 1 1.41-1.41a1 1 0 1 1-1.41 1.41"></svg:path>`,
})
export class ZondiconsBrightnessDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
