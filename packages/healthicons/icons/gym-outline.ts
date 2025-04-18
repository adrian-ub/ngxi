import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsGymOutlineIcon],svg[healthicons-gym-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 32V16h-3v16zm-5-3V19h-3v4h-1v2h1v4zm15-13v16h3V16zm5 13h3v-4h1v-2h-1v-4h-3zm-13-4h6v-2h-6z"></svg:path><svg:path fill-rule="evenodd" d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsGymOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
