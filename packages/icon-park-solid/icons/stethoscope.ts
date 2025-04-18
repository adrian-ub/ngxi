import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStethoscopeIcon],svg[icon-park-solid-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.947 4v6M10.053 7H4v14c0 5 4 11 12 11s12-6 12-11V7zm0-3v6z"></svg:path><svg:path fill="currentColor" d="M40 23a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M16 32c0 6.627 5.373 12 12 12s12-5.373 12-12v-9"></svg:path></svg:g>`,
})
export class IconParkSolidStethoscopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
