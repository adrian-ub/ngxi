import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFZeroKeyIcon],svg[icon-park-solid-f-zero-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFZeroKey0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:rect width="8" height="16" x="26" y="16" fill="#fff" stroke="#000" rx="4"></svg:rect><svg:path stroke="#000" d="M21 16h-7v16m0-8h7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFZeroKey0)"></svg:path>`,
})
export class IconParkSolidFZeroKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
