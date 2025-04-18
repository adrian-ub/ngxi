import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineListMiddleIcon],svg[icon-park-outline-list-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-16a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 28a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path><svg:path stroke-linecap="round" d="M20 24h24M20 38h24M20 10h24"></svg:path></svg:g>`,
})
export class IconParkOutlineListMiddleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
