import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTheSsumIcon],svg[arcticons-the-ssum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M32.868 32.613A24.75 24.75 0 0 1 43.5 40.48m-39 0a24.75 24.75 0 0 1 10.632-7.868"></svg:path><svg:ellipse cx="24" cy="34.96" rx="8.781" ry="2.395"></svg:ellipse></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M32.781 34.96V15.004c0-9.978-17.562-9.978-17.562 0V34.96"></svg:path><svg:path d="M17.614 22.587c-1.596-2.395-.798-6.785 2.395-6.785c2.395 0 3.592 1.996 3.991 3.193c.4-1.197 1.597-3.193 3.991-3.193c3.193 0 3.992 3.991 2.395 6.785c-3.193 4.39-5.587 7.584-6.386 7.584s-3.193-3.193-6.386-7.584M21.702 9.66c-2.395.798-4.39 2.794-4.39 4.79"></svg:path></svg:g>`,
})
export class ArcticonsTheSsumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
