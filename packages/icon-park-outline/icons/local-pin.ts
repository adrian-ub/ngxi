import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLocalPinIcon],svg[icon-park-outline-local-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"></svg:path><svg:path stroke-linecap="round" d="M24 20v18m-8-6h-4L4 44h40l-8-12h-4"></svg:path></svg:g>`,
})
export class IconParkOutlineLocalPinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
