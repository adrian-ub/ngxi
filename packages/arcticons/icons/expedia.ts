import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsExpediaIcon],svg[arcticons-expedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.643 33.354A21.499 21.499 0 0 1 41.65 11.726m1.769 3.052A21.498 21.498 0 0 1 6.162 36"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m41.65 11.726l-10.703 5.255L15.86 9.435l-2.586 1.405l10.183 8.177l1.128 1.572l-5.502 3.141l-14.44 9.624M43.42 14.778l-9.916 6.723l-.945 16.852l-2.634 1.385l-1.89-12.868l-.812-1.723l-5.808 3.378L6.163 36"></svg:path>`,
})
export class ArcticonsExpediaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
