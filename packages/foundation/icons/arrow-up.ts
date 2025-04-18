import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationArrowUpIcon],svg[foundation-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M78.016 49.132L51.961 12.714a2.52 2.52 0 0 0-2.043-1.051h-.006a2.52 2.52 0 0 0-2.048 1.059L21.977 49.14a2.51 2.51 0 0 0-.183 2.612a2.51 2.51 0 0 0 2.236 1.361h12.183l-.001 32.709a2.514 2.514 0 0 0 2.516 2.515l22.541-.001a2.515 2.515 0 0 0 2.516-2.517V53.114h12.187c.94 0 1.803-.53 2.237-1.367a2.51 2.51 0 0 0-.193-2.615"></svg:path>`,
})
export class FoundationArrowUpIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
