import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAcvIcon],svg[arcticons-acv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.253 35.985c-.299.796-.597 1.79-1.194 2.885a14.2 14.2 0 0 1-2.486 3.381c1.193-.199 2.984-.596 4.873-1.591c1.79-.895 3.084-1.99 3.979-2.785m13.029-1.392v-8.554m-25.363.398l34.017-.597M14.054 8.434v8.753m-7.957.895l34.414-3.083"></svg:path><svg:ellipse cx="24" cy="22.061" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="18.5" ry="16.312"></svg:ellipse>`,
})
export class ArcticonsAcvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
