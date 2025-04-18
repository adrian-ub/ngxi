import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPizzaIcon],svg[zmdi-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 3q56 0 105.5 22.5T384 88L192 429L0 88q36-40 86-62.5T192 3M85 109.5q0 17.5 12.5 30t30 12.5t30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30M191.5 280q17.5 0 30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30t12.5 30t30 12.5"></svg:path>`,
})
export class ZmdiPizzaIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
