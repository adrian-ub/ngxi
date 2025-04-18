import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PauseFillIcon],svg[f7-pause-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.832 47.09h5.32c2.063 0 3.117-1.078 3.117-3.14V12.026c0-2.132-1.054-3.117-3.117-3.117h-5.32c-2.062 0-3.14 1.078-3.14 3.117V43.95c0 2.063 1.078 3.14 3.14 3.14m17.016 0h5.32c2.063 0 3.14-1.078 3.14-3.14V12.026c0-2.132-1.078-3.117-3.14-3.117h-5.32c-2.063 0-3.117 1.078-3.117 3.117V43.95c0 2.063 1.054 3.14 3.117 3.14"></svg:path>`,
})
export class F7PauseFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
