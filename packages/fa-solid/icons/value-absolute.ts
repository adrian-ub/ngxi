import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidValueAbsoluteIcon],svg[fa-solid-value-absolute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 32H16C7.16 32 0 39.16 0 48v416c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16zm448 0h-32c-8.84 0-16 7.16-16 16v416c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16zM377.3 150.87l-16.17-16.17c-8.93-8.93-23.41-8.93-32.35 0L256 207.48l-72.78-72.78c-8.93-8.93-23.41-8.93-32.35 0l-16.17 16.17c-8.93 8.93-8.93 23.41 0 32.35L207.48 256l-72.78 72.78c-8.93 8.93-8.93 23.41 0 32.35l16.17 16.17c8.93 8.93 23.41 8.93 32.35 0L256 304.52l72.78 72.78c8.93 8.93 23.41 8.93 32.35 0l16.17-16.17c8.93-8.93 8.93-23.41 0-32.35L304.52 256l72.78-72.78c8.93-8.93 8.93-23.42 0-32.35z" fill="currentColor"></svg:path>`,
})
export class FaSolidValueAbsoluteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
