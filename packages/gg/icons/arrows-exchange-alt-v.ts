import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExchangeAltVIcon],svg[gg-arrows-exchange-alt-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.984 4.993a1 1 0 0 1 1.848-.531L17.52 7.15a1 1 0 1 1-1.415 1.414l-1.12-1.121v7.55a1 1 0 0 1-2 0zm-1.969 14.014a1 1 0 0 1-1.848.531L6.48 16.85a1 1 0 0 1 1.415-1.414l1.12 1.121v-7.55a1 1 0 0 1 2 0z"></svg:path>`,
})
export class GgArrowsExchangeAltVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
