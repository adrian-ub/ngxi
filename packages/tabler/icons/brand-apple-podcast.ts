import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandApplePodcastIcon],svg[tabler-brand-apple-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.364 18.364a9 9 0 1 0-12.728 0"></svg:path><svg:path d="M11.766 22h.468a2 2 0 0 0 1.985-1.752l.5-4A2 2 0 0 0 12.734 14h-1.468a2 2 0 0 0-1.985 2.248l.5 4A2 2 0 0 0 11.766 22M10 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class TablerBrandApplePodcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
