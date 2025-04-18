import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlockThisIcon],svg[arcticons-block-this-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="14.701" cy="23.776" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.201" ry="10.342"></svg:ellipse><svg:ellipse cx="14.701" cy="23.776" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.55" ry="2.585"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.25 20.14H43.5v7.083h-3.606v7.343h-7.083v-7.343h-8.525"></svg:path>`,
})
export class ArcticonsBlockThisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
