import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMemoryCardOneIcon],svg[icon-park-solid-memory-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9a3 3 0 0 1 3-3h21.336a3 3 0 0 1 2.122.879l3.858 3.858l4.805 4.805A3 3 0 0 1 42 17.664V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"></svg:path><svg:path fill="currentColor" d="M31 26H17a3 3 0 0 0-3 3v13h20V29a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke-linecap="round" d="M29 16H17a3 3 0 0 1-3-3V6"></svg:path></svg:g>`,
})
export class IconParkSolidMemoryCardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
