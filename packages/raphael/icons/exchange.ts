import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelExchangeIcon],svg[raphael-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.786 12.876l7.556-4.363l-7.556-4.363v2.598H2.813v3.5h18.973zm-11.418 5.248l-7.556 4.362l7.556 4.362V24.25h18.974v-3.5H10.368z"></svg:path>`,
})
export class RaphaelExchangeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
