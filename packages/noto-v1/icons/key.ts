import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1KeyIcon],svg[noto-v1-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcc21b" d="M68.53 76.78c5.56 2.87 11.86 4.53 18.55 4.53c22.3 0 40.38-18.08 40.38-40.38S109.38.55 87.08.55S46.69 18.63 46.69 40.93c0 6.69 1.65 12.99 4.53 18.54L29.39 81.3v11.54H17.85v11.53H6.3l-5.77 5.78v17.31h17.31zm18.55-47.4c0-6.37 5.16-11.54 11.54-11.54c6.37 0 11.53 5.16 11.53 11.54s-5.16 11.54-11.53 11.54c-6.38 0-11.54-5.16-11.54-11.54"></svg:path>`,
})
export class NotoV1KeyIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
