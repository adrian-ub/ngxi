import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCoffeeBeanIcon],svg[streamline-coffee-bean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.536 10.536c-2.539 2.538-6.18 3.013-8.132 1.06C.45 9.643.926 6.003 3.464 3.464C6.004.926 9.645.451 11.597 2.404c1.953 1.952 1.478 5.593-1.06 8.132Z"></svg:path><svg:path d="M11.596 2.404s-.353 2.475-1.768 3.889c-1.414 1.414-4.242 0-5.656 1.414c-1.415 1.414-1.768 3.89-1.768 3.89"></svg:path></svg:g>`,
})
export class StreamlineCoffeeBeanIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
