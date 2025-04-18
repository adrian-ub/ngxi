import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFunction2Icon],svg[carbon-function-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.3 13L11 26.2c-.1.993-.9 1.8-1.9 1.8H4v-2h5l1.3-13H6v-2h4.5l.5-5.2c.092-1.002 1-1.8 2-1.8h5v2h-5l-.5 5H17v2zm3.7 6v7c0 1.1.9 2 2 2h2v-2h-2v-7h2v-2h-2c-1.1 0-2 .9-2 2m10-2h-2v2h2v7h-2v2h2c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonFunction2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
