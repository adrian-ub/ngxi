import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHippoIcon],svg[icon-park-solid-hippo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSHippo0"><svg:g fill="none"><svg:rect width="34" height="18" x="7" y="25" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="6"></svg:rect><svg:circle cx="17" cy="34" r="3" fill="#fff" stroke="#fff" stroke-width="4"></svg:circle><svg:circle cx="31" cy="34" r="3" fill="#fff" stroke="#fff" stroke-width="4"></svg:circle><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M11 19a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v6H11z"></svg:path><svg:circle cx="20" cy="19" r="2" fill="#000"></svg:circle><svg:circle cx="28" cy="19" r="2" fill="#000"></svg:circle><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M18 5a3 3 0 0 1 3 3v5h-6V8a3 3 0 0 1 3-3Zm12 0a3 3 0 0 1 3 3v5h-6V8a3 3 0 0 1 3-3Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHippo0)"></svg:path>`,
})
export class IconParkSolidHippoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
