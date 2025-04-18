import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirStrollerIcon],svg[iconoir-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 3a8.5 8.5 0 0 0-7.212 13m14.425 0A8.46 8.46 0 0 0 20 11.5v-2h2.5M8 21a2 2 0 1 1 0-4a2 2 0 0 1 0 4m7 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4M11.5 3v9m-8 0h16"></svg:path>`,
})
export class IconoirStrollerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
