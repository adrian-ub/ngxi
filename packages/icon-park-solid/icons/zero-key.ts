import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidZeroKeyIcon],svg[icon-park-solid-zero-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSZeroKey0"><svg:g fill="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke="#fff" rx="3"></svg:rect><svg:rect width="10" height="20" x="19" y="14" stroke="#000" rx="5"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSZeroKey0)"></svg:path>`,
})
export class IconParkSolidZeroKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
