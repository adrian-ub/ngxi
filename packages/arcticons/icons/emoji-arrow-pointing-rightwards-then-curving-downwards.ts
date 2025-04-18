import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiArrowPointingRightwardsThenCurvingDownwardsIcon],svg[arcticons-emoji-arrow-pointing-rightwards-then-curving-downwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.629 32.542l9.958 9.958l9.958-9.958"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.587 42.5V20.431c0-8.246-6.685-14.931-14.932-14.931h-4.2"></svg:path>`,
})
export class ArcticonsEmojiArrowPointingRightwardsThenCurvingDownwardsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
