import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGolfFillIcon],svg[ph-golf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M175.47 197.14a8 8 0 0 1-4.61 10.33a126 126 0 0 1-34.86 8.21V248a8 8 0 0 1-16 0v-32.32a126 126 0 0 1-34.86-8.21a8 8 0 1 1 5.72-14.94C104 197.56 116.15 200 128 200s24-2.44 37.14-7.47a8 8 0 0 1 10.33 4.61M216 96a88 88 0 1 1-88-88a88.1 88.1 0 0 1 88 88m-72 36a12 12 0 1 0-12 12a12 12 0 0 0 12-12m32-32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhGolfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
