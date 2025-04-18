import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidUserCircleIcon],svg[heroicons-solid-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-6-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 4a5 5 0 0 0-4.546 2.916A5.99 5.99 0 0 0 10 16a5.99 5.99 0 0 0 4.546-2.084A5 5 0 0 0 10 11" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidUserCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
