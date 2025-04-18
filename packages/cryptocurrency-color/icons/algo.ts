import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorAlgoIcon],svg[cryptocurrency-color-algo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#000"></svg:circle><svg:path fill="#FFF" d="m10.25 22.916l2.303-3.986l2.301-3.972l2.288-3.986l.38-.632l.167.632l.702 2.624l-.786 1.362l-2.301 3.972l-2.288 3.986h2.75l2.302-3.986l1.193-2.063l.562 2.063l1.066 3.986h2.47l-1.066-3.986l-1.067-3.972l-.28-1.025l1.712-2.961H20.16l-.085-.295l-.87-3.256L19.093 7h-2.4l-.056.084l-2.246 3.888l-2.302 3.986l-2.287 3.972L7.5 22.916z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorAlgoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
