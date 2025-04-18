import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTheaterIcon],svg[icon-park-outline-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 6h32a2 2 0 0 1 2 2v28L32 22.005q-4 2.378-8 2.378t-8-2.378L6 36V8a2 2 0 0 1 2-2Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M6 42h36"></svg:path></svg:g>`,
})
export class IconParkOutlineTheaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
