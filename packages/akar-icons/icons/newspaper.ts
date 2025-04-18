import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsNewspaperIcon],svg[akar-icons-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M5 21h12a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v13c0 1.657-.343 3-2 3"></svg:path><svg:path stroke-linejoin="round" d="M3 10a2 2 0 0 1 2-2h2v10.5c0 1.38-.62 2.5-2 2.5s-2-1.12-2-2.5z"></svg:path><svg:circle cx="12" cy="8" r="1"></svg:circle><svg:path d="M11 14h6m-6 3h3"></svg:path></svg:g>`,
})
export class AkarIconsNewspaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
