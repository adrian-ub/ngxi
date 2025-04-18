import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAutoLineWidthIcon],svg[icon-park-outline-auto-line-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M5 40V8"></svg:path><svg:path stroke-linejoin="round" d="M24 13L14 35m4-7h12m-6-15l10 22"></svg:path><svg:path d="M43 40V8"></svg:path></svg:g>`,
})
export class IconParkOutlineAutoLineWidthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
