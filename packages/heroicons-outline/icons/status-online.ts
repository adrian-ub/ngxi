import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsOutlineStatusOnlineIcon],svg[heroicons-outline-status-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 0 1 0-12.728m12.728 0a9 9 0 0 1 0 12.728m-9.9-2.828a5 5 0 0 1 0-7.072m7.072 0a5 5 0 0 1 0 7.072M13 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class HeroiconsOutlineStatusOnlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
