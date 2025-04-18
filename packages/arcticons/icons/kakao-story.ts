import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKakaoStoryIcon],svg[arcticons-kakao-story-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.677 43.5h22.646M17.707 33.44l8.808 3.767q7.545-8.809 7.545-18.869V4.5H13.94v15.102h8.797Q24 27.147 17.707 33.44"></svg:path>`,
})
export class ArcticonsKakaoStoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
