import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandYoutubeKidsIcon],svg[tabler-brand-youtube-kids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18.608 17.75l-3.9.268h-.027a13.8 13.8 0 0 0-3.722.828l-2.511.908a4.1 4.1 0 0 1-3.287-.216a3.82 3.82 0 0 1-1.98-2.527l-1.376-6.05a3.67 3.67 0 0 1 .536-2.86A3.96 3.96 0 0 1 4.83 6.44l11.25-2.354c2.137-.448 4.247.85 4.713 2.9l1.403 6.162a3.68 3.68 0 0 1-.697 3.086a4 4 0 0 1-2.89 1.512v.002z"></svg:path><svg:path d="m9 10l1.208 5l4.292-4z"></svg:path></svg:g>`,
})
export class TablerBrandYoutubeKidsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
