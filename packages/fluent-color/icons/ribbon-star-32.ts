import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorRibbonStar32Icon],svg[fluent-color-ribbon-star-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorRibbonStar320)" d="M10 19.313V29a1 1 0 0 0 1.515.858L16 27.166l4.485 2.692A1 1 0 0 0 22 29v-9.687A11.45 11.45 0 0 1 16 21c-2.199 0-4.253-.617-6-1.687"></svg:path><svg:path fill="url(#fluentColorRibbonStar321)" d="M22 20a9.96 9.96 0 0 1-6 2a9.96 9.96 0 0 1-6.36-2.283A9.98 9.98 0 0 1 6 12C6 6.477 10.477 2 16 2s10 4.477 10 10a9.99 9.99 0 0 1-4 8"></svg:path><svg:path fill="url(#fluentColorRibbonStar322)" d="m16.336 7.21l1.34 2.72l3.003.434c.307.044.43.422.207.64l-2.171 2.115l.513 2.99a.375.375 0 0 1-.544.394L16 15.09l-2.684 1.413a.375.375 0 0 1-.544-.395l.516-2.99l-2.174-2.115a.375.375 0 0 1 .207-.639l3.003-.434l1.34-2.72a.375.375 0 0 1 .672 0"></svg:path><svg:defs><svg:radialgradient id="fluentColorRibbonStar320" cx="0" cy="0" r="1" gradientTransform="matrix(0 16.8444 -26.4886 0 16 17.646)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#163697"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorRibbonStar321" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 44.518 -68.546)scale(111.635 95.6102)" gradientUnits="userSpaceOnUse"><svg:stop offset=".772" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorRibbonStar322" cx="0" cy="0" r="1" gradientTransform="matrix(-4.99988 -16.70782 24.10472 -7.21342 18.5 16.547)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B03111"></svg:stop><svg:stop offset="1" stop-color="#E67505"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorRibbonStar32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
