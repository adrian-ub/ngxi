import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFishChristianityIcon],svg[tabler-fish-christianity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 7S16.354 17 9.692 17c-3.226.025-6.194-1.905-7.692-5c1.498-3.095 4.466-5.025 7.692-5C16.354 7 22 17 22 17"></svg:path>`,
})
export class TablerFishChristianityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
