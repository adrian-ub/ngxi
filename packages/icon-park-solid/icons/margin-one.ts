import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMarginOneIcon],svg[icon-park-solid-margin-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMarginOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M6 34h36M6 14h36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 11v6m0 14v6m36-6v6m0-26v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMarginOne0)"></svg:path>`,
})
export class IconParkSolidMarginOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
