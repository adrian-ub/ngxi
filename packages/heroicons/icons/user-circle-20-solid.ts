import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsUserCircle20SolidIcon],svg[heroicons-user-circle-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-5.5-2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M10 12a5.99 5.99 0 0 0-4.793 2.39A6.48 6.48 0 0 0 10 16.5a6.48 6.48 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsUserCircle20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
