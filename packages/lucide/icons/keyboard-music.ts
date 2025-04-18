import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideKeyboardMusicIcon],svg[lucide-keyboard-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect><svg:path d="M6 8h4m4 0h.01M18 8h.01M2 12h20M6 12v4m4-4v4m4-4v4m4-4v4"></svg:path></svg:g>`,
})
export class LucideKeyboardMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
