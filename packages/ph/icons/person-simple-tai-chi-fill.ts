import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleTaiChiFillIcon],svg[ph-person-simple-tai-chi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 48a32 32 0 1 1 32 32a32 32 0 0 1-32-32m120 48H40a8 8 0 0 0 0 16h80v28.44l-77.35 69.61A8 8 0 0 0 53.35 222l76.2-68.58L176 173.28V216a8 8 0 0 0 16 0v-48a8 8 0 0 0-4.85-7.35L136 138.72V112h80a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhPersonSimpleTaiChiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
