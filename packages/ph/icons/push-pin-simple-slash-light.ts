import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPushPinSimpleSlashLightIcon],svg[ph-push-pin-simple-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.25 40a6 6 0 0 1 6-6H192a6 6 0 0 1 0 12h-8.85l19.17 108.64a6 6 0 0 1-4.86 7a5.4 5.4 0 0 1-1.05.1a6 6 0 0 1-5.9-5L171 46H91.25a6 6 0 0 1-6-6M212 220.44a6 6 0 0 1-8.48-.4L169 182h-35v58a6 6 0 0 1-12 0v-58H40a6 6 0 0 1 0-12h11l17.38-98.67L43.56 44a6 6 0 0 1 8.88-8l160 176a6 6 0 0 1-.44 8.44M158 170L78.58 82.56L63.15 170Z"></svg:path>`,
})
export class PhPushPinSimpleSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
