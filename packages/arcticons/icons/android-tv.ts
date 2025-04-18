import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAndroidTvIcon],svg[arcticons-android-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.367 35.5H41.5a2 2 0 0 0 2-2v-24a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h9.132"></svg:path><svg:circle cx="24" cy="31" r="9.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="31" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.937 24.481L24 23.85l-.937.631m7.456 7.456L31.15 31l-.631-.937m-7.456 7.456l.937.631l.937-.631m-7.456-7.456L16.85 31l.631.937"></svg:path>`,
})
export class ArcticonsAndroidTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
