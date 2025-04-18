import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArrowCircleLeftIcon],svg[codicon-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m7.92 10.631l-2.14-2.14h5.752v-1h-5.68L7.92 5.426l-.707-.707l-2.956 2.957v.707l2.956 2.956z"></svg:path><svg:path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3"></svg:path></svg:g>`,
})
export class CodiconArrowCircleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
