import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSailingIcon],svg[icon-park-twotone-sailing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSailing0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M19 30h-8l8-9m20 9C39 17.008 28.994 4 19 4v26z"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M32.651 41.577L42 36H6l2 6h23.114a3 3 0 0 0 1.537-.423"></svg:path><svg:path stroke-linejoin="round" d="M19 30v6"></svg:path><svg:path d="M29 21h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSailing0)"></svg:path>`,
})
export class IconParkTwotoneSailingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
