import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosCodefactorIconIcon],svg[logos-codefactor-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosCodefactorIcon0" x1="-.002%" x2="100.002%" y1="49.998%" y2="49.998%"><svg:stop offset="0%" stop-color="#0AA1A5"></svg:stop><svg:stop offset="100%" stop-color="#50D690"></svg:stop></svg:lineargradient><svg:lineargradient id="logosCodefactorIcon1" x1="-.002%" x2="100.002%" y1="49.998%" y2="49.998%"><svg:stop offset="0%" stop-color="#0AA1A5"></svg:stop><svg:stop offset="100%" stop-color="#50D690"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#F44A6A" d="M56.586 28.573c0 15.786-12.668 28.572-28.287 28.572C12.667 57.145 0 44.36 0 28.573S12.667 0 28.299 0c15.62 0 28.287 12.786 28.287 28.573m0 100.742c0 15.774-12.668 28.572-28.287 28.572C12.667 157.887 0 145.09 0 129.315c0-15.787 12.667-28.573 28.299-28.573c15.62 0 28.287 12.786 28.287 28.573m0 100.73c0 15.787-12.668 28.573-28.287 28.573C12.667 258.618 0 245.832 0 230.045c0-15.786 12.667-28.572 28.299-28.572c15.62 0 28.287 12.786 28.287 28.572"></svg:path><svg:path fill="url(#logosCodefactorIcon0)" d="M120.576 0C104.956 0 92.29 12.786 92.29 28.573c0 15.786 12.667 28.572 28.286 28.572h107.148c15.62 0 28.275-12.786 28.275-28.572C255.999 12.786 243.343 0 227.712 0H120.564z"></svg:path><svg:path fill="url(#logosCodefactorIcon1)" d="M120.576 100.73c-15.62 0-28.286 12.798-28.286 28.573c0 15.786 12.667 28.584 28.286 28.584h61.17c15.62 0 28.286-12.798 28.286-28.572c0-15.787-12.667-28.573-28.286-28.573h-61.17z"></svg:path>`,
})
export class LogosCodefactorIconIcon {
  readonly viewBox = input("0 0 256 259")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
