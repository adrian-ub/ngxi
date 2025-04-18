import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBookIcon],svg[iconoir-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14"></svg:path><svg:path stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"></svg:path><svg:path d="M9 7h6"></svg:path></svg:g>`,
})
export class IconoirBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
