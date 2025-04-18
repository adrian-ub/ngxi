import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePodcastIcon],svg[lucide-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.85 18.58a9 9 0 1 0-9.7 0"></svg:path><svg:path d="M8 14a5 5 0 1 1 8 0"></svg:path><svg:circle cx="12" cy="11" r="1"></svg:circle><svg:path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"></svg:path></svg:g>`,
})
export class LucidePodcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
