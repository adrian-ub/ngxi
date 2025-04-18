import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBookOpenUserFillIcon],svg[ph-book-open-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 80v120a8 8 0 0 1-8 8h-72a24 24 0 0 0-24 23.94a7.9 7.9 0 0 1-5.12 7.55A8 8 0 0 1 120 232a24 24 0 0 0-24-24H24a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h64a32 32 0 0 1 32 32v63.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V104a32 32 0 0 1 32-32h64a8 8 0 0 1 8 8M88.81 56H89a47.92 47.92 0 0 1 36 17.4a4 4 0 0 0 6.08 0A47.92 47.92 0 0 1 167 56h.19a4 4 0 0 0 3.54-5.84a48 48 0 0 0-85.46 0A4 4 0 0 0 88.81 56"></svg:path>`,
})
export class PhBookOpenUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
