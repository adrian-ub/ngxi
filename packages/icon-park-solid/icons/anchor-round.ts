import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAnchorRoundIcon],svg[icon-park-solid-anchor-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 38c0-9.941-8.059-20-18-20S6 28.059 6 38m14-24H10m28 0H28"></svg:path><svg:circle cx="7" cy="14" r="3" fill="currentColor"></svg:circle><svg:circle cx="41" cy="14" r="3" fill="currentColor"></svg:circle><svg:circle cx="24" cy="14" r="4" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidAnchorRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
