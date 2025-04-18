import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCloseCircle1BoldIcon],svg[iconamoon-close-circle-1-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m14 10l-4 4m0-4l4 4"></svg:path></svg:g>`,
})
export class IconamoonCloseCircle1BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
