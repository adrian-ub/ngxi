import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCookingPotIcon],svg[ph-cooking-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m92.8 46.4L224 124v60a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-60L3.2 102.4a8 8 0 0 1 9.6-12.8L32 104V80a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v24l19.2-14.4a8 8 0 0 1 9.6 12.8M208 88H48v96a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16Z"></svg:path>`,
})
export class PhCookingPotIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
