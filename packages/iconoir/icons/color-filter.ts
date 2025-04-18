import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirColorFilterIcon],svg[iconoir-color-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 14.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M16 21.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path d="M8 21.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path></svg:g>`,
})
export class IconoirColorFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
