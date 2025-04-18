import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiArrowPointingRightwardsThenCurvingUpwardsIcon],svg[arcticons-emoji-arrow-pointing-rightwards-then-curving-upwards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.629 15.458L28.587 5.5l9.958 9.958"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.587 5.5v22.069c0 8.246-6.685 14.931-14.932 14.931h-4.2"></svg:path>`,
})
export class ArcticonsEmojiArrowPointingRightwardsThenCurvingUpwardsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
