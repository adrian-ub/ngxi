import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCardReaderIcon],svg[iconoir-card-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 19V3h14v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M5 6H3.5a1.5 1.5 0 1 1 0-3h17a1.5 1.5 0 0 1 0 3H19"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 3v18"></svg:path></svg:g>`,
})
export class IconoirCardReaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
