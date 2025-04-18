import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCameraIcon],svg[heroicons-solid-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1.586a1 1 0 0 1-.707-.293l-1.121-1.121A2 2 0 0 0 11.172 3H8.828a2 2 0 0 0-1.414.586L6.293 4.707A1 1 0 0 1 5.586 5zm6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidCameraIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
