import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFNineKeyIcon],svg[icon-park-solid-f-nine-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFNineKey0"><svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#000" d="M30 24a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M26 29.124C26.618 30.81 28.108 32 29.848 32C32.14 32 34 30.549 34 28v-8m-13-4h-7v16m0-8h7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFNineKey0)"></svg:path>`,
})
export class IconParkSolidFNineKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
