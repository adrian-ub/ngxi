import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsOutlineCakeIcon],svg[heroicons-outline-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.7 2.7 0 0 1-3 0a2.7 2.7 0 0 0-3 0a2.7 2.7 0 0 1-3 0a2.7 2.7 0 0 0-3 0a2.7 2.7 0 0 1-3 0a2.7 2.7 0 0 0-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7zm-3-9v-2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2z"></svg:path>`,
})
export class HeroiconsOutlineCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
