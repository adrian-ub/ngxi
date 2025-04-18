import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbonStar32FilledIcon],svg[fluent-ribbon-star-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 29v-7.187a11.45 11.45 0 0 0 6 1.687c2.199 0 4.253-.617 6-1.687V29a1 1 0 0 1-1.515.858L16 27.166l-4.485 2.692A1 1 0 0 1 10 29m6-7a9.96 9.96 0 0 0 6-2a9.99 9.99 0 0 0 4-8c0-5.523-4.477-10-10-10S6 6.477 6 12a9.98 9.98 0 0 0 4 8a9.96 9.96 0 0 0 6 2m1.676-12.07l3.003.434c.307.044.43.422.207.64l-2.171 2.115l.513 2.99a.375.375 0 0 1-.544.394L16 15.09l-2.684 1.413a.375.375 0 0 1-.544-.395l.516-2.99l-2.174-2.115a.375.375 0 0 1 .207-.639l3.003-.434l1.34-2.72a.375.375 0 0 1 .672 0z"></svg:path>`,
})
export class FluentRibbonStar32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
