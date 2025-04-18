import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainNatsIcon],svg[devicon-plain-nats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.84 0H2.16v100.305h53l9.137 8.542v-.138L85.147 128v-27.695h40.693zm-21.402 77.067h-22.41l-45.243-42.3v42.3H21.951V23.332h23.194l44.504 41.515V23.332h14.79z"></svg:path>`,
})
export class DeviconPlainNatsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
