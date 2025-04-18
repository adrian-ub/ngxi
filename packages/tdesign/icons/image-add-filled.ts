import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignImageAddFilledIcon],svg[tdesign-image-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h11.232a6.5 6.5 0 0 1-.732-3c0-1.9.816-3.61 2.116-4.799L9 8.586l-5 5V4h16v8.576a6.5 6.5 0 0 1 2 .656z"></svg:path><svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M18 24h2v-4h4v-2h-4v-4h-2v4h-4v2h4z"></svg:path>`,
})
export class TdesignImageAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
