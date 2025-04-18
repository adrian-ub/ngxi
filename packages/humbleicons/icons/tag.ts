import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsTagIcon],svg[humbleicons-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 10.586V5a1 1 0 0 1 1-1h5.586a1 1 0 0 1 .707.293l8.5 8.5a1 1 0 0 1 0 1.414l-5.586 5.586a1 1 0 0 1-1.414 0l-8.5-8.5A1 1 0 0 1 4 10.586z"></svg:path><svg:circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class HumbleiconsTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
