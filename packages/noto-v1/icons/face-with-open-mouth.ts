import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1FaceWithOpenMouthIcon],svg[noto-v1-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcc21b" d="M63.79 8.64C1.48 8.64 0 78.5 0 92.33s28.56 25.03 63.79 25.03c35.24 0 63.79-11.21 63.79-25.03c0-13.83-1.47-83.69-63.79-83.69"></svg:path><svg:path fill="#2f2f2f" d="M42.21 61.3c-4.49.04-8.17-4.27-8.22-9.62c-.05-5.37 3.55-9.75 8.04-9.79c4.48-.04 8.17 4.27 8.22 9.64c.05 5.35-3.55 9.72-8.04 9.77m44.11 0c4.48-.01 8.11-4.36 8.1-9.71c-.01-5.37-3.66-9.7-8.14-9.69c-4.49.01-8.13 4.36-8.12 9.73c.02 5.35 3.67 9.68 8.16 9.67"></svg:path><svg:path fill="#ed6c30" d="M64 69.05c-10.15 0-14.76 10.5-14.76 20.23s5.21 15.01 14.76 15.01s14.76-5.28 14.76-15.01c0-9.74-4.61-20.23-14.76-20.23"></svg:path>`,
})
export class NotoV1FaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
