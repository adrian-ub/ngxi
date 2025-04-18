import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsTagsIcon],svg[humbleicons-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M3 10.95V6a1 1 0 0 1 1-1h4.95a1 1 0 0 1 .707.293l7.636 7.636a1 1 0 0 1 0 1.415l-4.95 4.949a1 1 0 0 1-1.414 0l-7.636-7.636A1 1 0 0 1 3 10.948z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m15.636 20l5.657-5.656a1 1 0 0 0 0-1.415L13.363 5"></svg:path><svg:circle cx="6.5" cy="8.5" r="1.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class HumbleiconsTagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
