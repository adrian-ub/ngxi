import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsGiftIcon],svg[akar-icons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="14" x="3" y="8" rx="2"></svg:rect><svg:path d="M12 5a3 3 0 1 0-3 3m6 0a3 3 0 1 0-3-3m0 0v17m9-7H3"></svg:path></svg:g>`,
})
export class AkarIconsGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
