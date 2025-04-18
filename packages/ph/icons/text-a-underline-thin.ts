import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextAUnderlineThinIcon],svg[ph-text-a-underline-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.3 171.62a4 4 0 0 0 5.32-1.92L85.36 132h85.28l17.74 37.7a4 4 0 1 0 7.24-3.4l-64-136a4 4 0 0 0-7.24 0l-64 136a4 4 0 0 0 1.92 5.32M128 41.39L166.87 124H89.13ZM220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextAUnderlineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
