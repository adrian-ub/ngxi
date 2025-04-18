import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHomeAltIcon],svg[healthicons-home-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41.708 25.794L24.058 8.086L6.294 25.792a1 1 0 1 0 1.412 1.416L11 23.925V39a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V23.904l3.292 3.302a1 1 0 1 0 1.416-1.412"></svg:path>`,
})
export class HealthiconsHomeAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
