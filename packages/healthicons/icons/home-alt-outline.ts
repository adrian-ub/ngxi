import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHomeAltOutlineIcon],svg[healthicons-home-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M41.708 25.794L24.058 8.086L6.294 25.792a1 1 0 1 0 1.412 1.416L10 24.922V39a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8.74a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V39a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V24.907l2.292 2.3a1 1 0 1 0 1.416-1.413M36 22.9L24.053 10.914L12 22.928V38h7v-7.74a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3V38h7z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsHomeAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
