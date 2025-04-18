import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSnailIcon],svg[hugeicons-snail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.577 14c0 2.5 1.923 6 5.963 6S22 16.866 22 13c0-4.97-4.23-9-9.938-9C6.415 4 1.413 8.255 2.056 15.387a.89.89 0 0 0 .658.79c2.7.682 5.474-.313 6.863-2.177m0 0c0-5.128 7.95-6.209 7.95-1c0 1.469-1.027 2.726-2.484 3.246" color="currentColor"></svg:path>`,
})
export class HugeiconsSnailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
