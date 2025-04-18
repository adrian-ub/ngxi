import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTheaterIcon],svg[icon-park-twotone-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTheater0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" stroke-linejoin="round" d="M8 6h32a2 2 0 0 1 2 2v28L32 22.005q-4 2.378-8 2.378t-8-2.378L6 36V8a2 2 0 0 1 2-2Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M6 42h36"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTheater0)"></svg:path>`,
})
export class IconParkTwotoneTheaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
