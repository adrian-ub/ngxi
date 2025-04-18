import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSquareWaveIcon],svg[iconoir-square-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h3V4h6v16h6v-8h3m-6.5 0h1m-7 0h1"></svg:path>`,
})
export class IconoirSquareWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
