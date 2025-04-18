import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsOutlineAcademicCapIcon],svg[heroicons-outline-academic-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12 14l9-5l-9-5l-9 5z"></svg:path><svg:path d="m12 14l6.16-3.422a12.1 12.1 0 0 1 .665 6.479A11.95 11.95 0 0 0 12 20.055a11.95 11.95 0 0 0-6.824-2.998a12.1 12.1 0 0 1 .665-6.479z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 14l9-5l-9-5l-9 5zm0 0l6.16-3.422a12.1 12.1 0 0 1 .665 6.479A11.95 11.95 0 0 0 12 20.055a11.95 11.95 0 0 0-6.824-2.998a12.1 12.1 0 0 1 .665-6.479zm-4 6v-7.5l4-2.222"></svg:path></svg:g>`,
})
export class HeroiconsOutlineAcademicCapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
