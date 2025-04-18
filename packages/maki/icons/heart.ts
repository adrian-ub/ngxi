import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiHeartIcon],svg[maki-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.91 7.75c-1.17 2.25-4.3 5.31-6.07 6.94a.5.5 0 0 1-.67 0C5.39 13.06 2.26 10 1.09 7.75C-1.48 2.8 5-.5 7.5 4.45C10-.5 16.48 2.8 13.91 7.75"></svg:path>`,
})
export class MakiHeartIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
