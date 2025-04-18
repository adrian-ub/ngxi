import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsHumbleiconIcon],svg[humbleicons-humbleicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M8 4a2 2 0 0 1 2 2v11a2 2 0 1 1-4 0V6a2 2 0 0 1 2-2zm8 8a2 2 0 0 1 2 2v3a2 2 0 1 1-4 0v-3a2 2 0 0 1 2-2z"></svg:path><svg:circle cx="16" cy="6" r="2"></svg:circle></svg:g>`,
})
export class HumbleiconsHumbleiconIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
