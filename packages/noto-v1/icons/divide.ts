import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DivideIcon],svg[noto-v1-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#757f3f"><svg:circle cx="64" cy="17.12" r="15.31"></svg:circle><svg:circle cx="64" cy="110.88" r="15.31"></svg:circle><svg:path d="M8.57 51.69c-4.36 0-7.92 3.56-7.92 7.92v8.78c0 4.36 3.56 7.92 7.92 7.92h110.86c4.36 0 7.92-3.56 7.92-7.92v-8.78c0-4.36-3.56-7.92-7.92-7.92z"></svg:path></svg:g>`,
})
export class NotoV1DivideIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
