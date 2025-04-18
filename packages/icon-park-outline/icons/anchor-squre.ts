import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAnchorSqureIcon],svg[icon-park-outline-anchor-squre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 38c0-9.941-8.059-20-18-20S6 28.059 6 38m14-24H10m28 0H28"></svg:path><svg:circle cx="24" cy="14" r="4"></svg:circle><svg:path d="M20 10h8v8h-8zm18 1h6v6h-6zM4 11h6v6H4z"></svg:path></svg:g>`,
})
export class IconParkOutlineAnchorSqureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
