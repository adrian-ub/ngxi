import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBeerIcon],svg[icon-park-solid-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M25.5 19H33a2 2 0 0 1 2 2v23H13V21a2 2 0 0 1 2-2h2.5"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M17 8h-2.5a5.5 5.5 0 1 0 0 11H19v10.5a2.5 2.5 0 0 0 5 0V19h9.5a5.5 5.5 0 1 0 0-11H29s-1-4-6-4s-6 4-6 4"></svg:path><svg:path d="M35 21h5a2 2 0 0 1 2 2v5a4 4 0 0 1-4 4h-3"></svg:path></svg:g>`,
})
export class IconParkSolidBeerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
