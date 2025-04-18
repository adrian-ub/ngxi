import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1HeartSuitIcon],svg[noto-v1-heart-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#db4437" d="M90.35 16.05c-11.66 0-21.81 6.97-26.35 17.06c-4.54-10.08-14.69-17.06-26.35-17.06c-15.92 0-28.87 12.96-28.87 28.88c0 35.9 51.79 65.46 54 66.7c.38.21.79.32 1.21.32s.84-.11 1.21-.32c2.2-1.24 54.01-30.8 54.01-66.7c.01-15.92-12.94-28.88-28.86-28.88"></svg:path>`,
})
export class NotoV1HeartSuitIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
