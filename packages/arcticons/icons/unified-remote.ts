import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnifiedRemoteIcon],svg[arcticons-unified-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsUnifiedRemote0" fill="none" stroke="currentColor" d="M11 5.5A31.5 31.5 0 0 1 42.5 37"></svg:path></svg:defs><svg:use href="#arcticonsUnifiedRemote0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsUnifiedRemote0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:circle cx="11" cy="37" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.392 5.835A31.527 31.527 0 0 1 42.5 37a32 32 0 0 1-.335 4.608"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.713 42.5A19.516 19.516 0 0 0 5.5 18.287"></svg:path>`,
})
export class ArcticonsUnifiedRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
