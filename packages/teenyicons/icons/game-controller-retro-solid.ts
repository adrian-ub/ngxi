import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGameControllerRetroSolidIcon],svg[teenyicons-game-controller-retro-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 2A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8A1.5 1.5 0 0 1 1.5 2zM10 6H8V5h2zM4 7V6h1v1h1v1H5v1H4V8H3V7zm8 3h-2V9h2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGameControllerRetroSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
