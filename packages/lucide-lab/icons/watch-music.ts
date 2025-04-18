import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabWatchMusicIcon],svg[lucide-lab-watch-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15.8 6l-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"></svg:path><svg:rect width="12" height="12" x="6" y="6" rx="2"></svg:rect><svg:path d="m8.2 18l.5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4"></svg:path><svg:circle cx="11.5" cy="13.5" r=".5"></svg:circle><svg:path d="m14 11l-2-1v3.5"></svg:path></svg:g>`,
})
export class LucideLabWatchMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
