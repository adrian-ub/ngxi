import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWallpaperchangerforredditIcon],svg[arcticons-wallpaperchangerforreddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.956 10.23L5.5 19.763l5.631 3.076L5.5 25.913l5.642 3.08L5.5 32.076l17.456 9.531l17.456-9.531l-5.642-3.081l5.642-3.08l-5.631-3.076l5.63-3.076Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.131 22.838l11.825 6.43l11.825-6.43"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.142 28.994l11.814 6.435l11.814-6.435m-9.443-17.468l1.823-5.132l9.637 2.998"></svg:path><svg:circle cx="39.785" cy="10.386" r="2.715" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsWallpaperchangerforredditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
