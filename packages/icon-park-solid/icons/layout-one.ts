import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLayoutOneIcon],svg[icon-park-solid-layout-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSLayoutOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M6 16h36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 13v6m36-5v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 16v26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 42h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLayoutOne0)"></svg:path>`,
})
export class IconParkSolidLayoutOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
