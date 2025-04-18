import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsEllipsisHorizontal20SolidIcon],svg[heroicons-ellipsis-horizontal-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m5.5 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m7-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class HeroiconsEllipsisHorizontal20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
