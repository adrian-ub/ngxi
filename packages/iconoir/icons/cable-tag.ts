import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCableTagIcon],svg[iconoir-cable-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.667 8L10 12h4l-1.667 4"></svg:path></svg:g>`,
})
export class IconoirCableTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
