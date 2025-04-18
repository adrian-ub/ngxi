import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsOutlineUserRemoveIcon],svg[heroicons-outline-user-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 7a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6m12-2h-6"></svg:path>`,
})
export class HeroiconsOutlineUserRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
