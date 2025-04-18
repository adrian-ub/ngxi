import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationArrowLeftIcon],svg[foundation-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M49.132 21.984L12.714 48.039a2.52 2.52 0 0 0-1.051 2.043v.006a2.52 2.52 0 0 0 1.059 2.048L49.14 78.023a2.51 2.51 0 0 0 2.612.183a2.51 2.51 0 0 0 1.361-2.236V63.787l32.709.001a2.514 2.514 0 0 0 2.515-2.516l-.001-22.541a2.515 2.515 0 0 0-2.516-2.516H53.114V24.029c0-.94-.53-1.803-1.367-2.237a2.51 2.51 0 0 0-2.615.192"></svg:path>`,
})
export class FoundationArrowLeftIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
