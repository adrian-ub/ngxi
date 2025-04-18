import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLarkOneIcon],svg[icon-park-outline-lark-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3.494 17.72L41.678 6.321L30.364 44.59l-8.88-8.88l.041-9.234l-9.546-.27z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M27.535 14.89a4 4 0 1 0 5.657 5.658a4 4 0 0 0-5.657-5.657" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41.678 6.406L30.364 17.719"></svg:path></svg:g>`,
})
export class IconParkOutlineLarkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
