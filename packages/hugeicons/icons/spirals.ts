import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSpiralsIcon],svg[hugeicons-spirals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.953 2C17.502 2 22 6.477 22 12s-4.498 10-10.047 10C-.63 22-1.827 4.018 11.5 5c3.35.247 6.53 3.41 6.53 7c0 4.5-2.794 6.5-6.53 6.5c-7 0-8.31-10.033-.498-9.5c1.506.103 3.014 1.343 3.014 3c0 1.928-1.016 3-2.895 3" color="currentColor"></svg:path>`,
})
export class HugeiconsSpiralsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
