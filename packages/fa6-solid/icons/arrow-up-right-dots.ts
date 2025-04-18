import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidArrowUpRightDotsIcon],svg[fa6-solid-arrow-up-right-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zm416 80a48 48 0 1 0-96 0a48 48 0 1 0 96 0M448 208a48 48 0 1 0-96 0a48 48 0 1 0 96 0m-48 176a48 48 0 1 0 0-96a48 48 0 1 0 0 96m48 80a48 48 0 1 0-96 0a48 48 0 1 0 96 0m128 0a48 48 0 1 0-96 0a48 48 0 1 0 96 0m-304-80a48 48 0 1 0 0-96a48 48 0 1 0 0 96m48 80a48 48 0 1 0-96 0a48 48 0 1 0 96 0m-176 48a48 48 0 1 0 0-96a48 48 0 1 0 0 96m432-176a48 48 0 1 0-96 0a48 48 0 1 0 96 0m-48-80a48 48 0 1 0 0-96a48 48 0 1 0 0 96"></svg:path>`,
})
export class Fa6SolidArrowUpRightDotsIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
